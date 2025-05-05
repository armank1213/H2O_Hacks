import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal, TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Tracker = () => {
  const [usageData, setUsageData] = useState({
    brushing: { amount: 0, cost: 0, image: null, unit: 'sessions' },
    tap: { amount: 0, cost: 0, image: null, unit: 'minutes' },
    drinking: { amount: 0, cost: 0, image: null, unit: 'cups' },
    washing: { amount: 0, cost: 0, image: null, unit: 'loads' },
    sprinklers: { amount: 0, cost: 0, image: null, unit: 'minutes per head', heads: 1 },
    showers: { amount: 0, cost: 0, image: null, unit: 'minutes' },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [currentKey, setCurrentKey] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [headsValue, setHeadsValue] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [customServices, setCustomServices] = useState({});
  const [customModalVisible, setCustomModalVisible] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customUnit, setCustomUnit] = useState('');
  const [customRate, setCustomRate] = useState('');

  const rates = {
    brushing: 0.0025,
    tap: 0.015,
    drinking: 0.002,
    washing: 1.2,
    sprinklers: 0.015,
    showers: 0.025,
  };

  const calculateTotalCost = () => {
    const builtinTotal = Object.values(usageData).reduce((sum, item) => sum + item.cost, 0);
    const customTotal = Object.values(customServices).reduce((sum, item) => sum + item.cost, 0);
    return (builtinTotal + customTotal).toFixed(2);
  };

  const openModal = (key) => {
    setCurrentKey(key);
    setInputValue('');
    setHeadsValue('');
    setSelectedImage(null);
    setModalVisible(true);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleAddUsage = () => {
    const val = parseFloat(inputValue);
    const heads = parseInt(headsValue) || 1;
    if (isNaN(val)) return alert('Enter a valid number');

    if (usageData[currentKey]) {
      const cost = currentKey === 'sprinklers'
        ? val * heads * rates[currentKey]
        : val * rates[currentKey];

      setUsageData(prev => ({
        ...prev,
        [currentKey]: {
          ...prev[currentKey],
          amount: prev[currentKey].amount + val,
          cost: prev[currentKey].cost + cost,
          image: selectedImage || prev[currentKey].image,
        },
      }));
    } else {
      const unit = customServices[currentKey].unit;
      const rate = parseFloat(customServices[currentKey].rate);
      const cost = val * rate;
      setCustomServices(prev => ({
        ...prev,
        [currentKey]: {
          ...prev[currentKey],
          amount: prev[currentKey].amount + val,
          cost: prev[currentKey].cost + cost,
          image: selectedImage || prev[currentKey].image,
        }
      }));
    }

    setModalVisible(false);
  };

  const handleAddCustomService = () => {
    setCustomName('');
    setCustomUnit('');
    setCustomRate('');
    setCustomModalVisible(true);
  };

  const confirmAddCustomService = () => {
    if (!customName || !customUnit || isNaN(parseFloat(customRate))) {
      return alert('Please enter valid name, unit, and rate');
    }

    const newKey = `custom_${Date.now()}`;
    setCustomServices(prev => ({
      ...prev,
      [newKey]: {
        name: customName,
        unit: customUnit,
        rate: parseFloat(customRate),
        amount: 0,
        cost: 0,
        image: null,
      }
    }));
    setCustomModalVisible(false);
  };

  const renderService = (key, item, isCustom = false) => (
    <TouchableOpacity key={key} style={styles.usageBox} onPress={() => openModal(key)}>
      <Text style={styles.label}>{isCustom ? item.name : usageLabels[key]}</Text>
      <Image
        source={{ uri: item.image || 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Text style={styles.amount}>Total: {item.amount} {item.unit || ''}</Text>
      <Text style={styles.result}>Cost: ${item.cost.toFixed(2)}</Text>
      <Text style={styles.tapToAdd}>Tap to add usage</Text>
    </TouchableOpacity>
  );

  const usageLabels = {
    brushing: 'Brushing Teeth',
    tap: 'Tap Water',
    drinking: 'Cups Drank',
    washing: 'Dishwasher/Washing Machine',
    sprinklers: 'Sprinklers',
    showers: 'Shower',
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Total Estimated Cost: ${calculateTotalCost()}</Text>

      {Object.keys(usageData).map(key => renderService(key, usageData[key]))}

      {Object.keys(customServices).map(key => renderService(key, customServices[key], true))}

      <TouchableOpacity style={styles.customButton} onPress={handleAddCustomService}>
        <Text style={styles.buttonText}>+ Add Custom Service</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Add Usage: {usageLabels[currentKey] || customServices[currentKey]?.name}
            </Text>
            <TextInput
              style={styles.input}
              placeholder={`Enter amount in ${usageData[currentKey]?.unit || customServices[currentKey]?.unit}`}
              keyboardType="numeric"
              value={inputValue}
              onChangeText={setInputValue}
            />
            {currentKey === 'sprinklers' && (
              <TextInput
                style={styles.input}
                placeholder="Enter number of sprinkler heads"
                keyboardType="numeric"
                value={headsValue}
                onChangeText={setHeadsValue}
              />
            )}
            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
              <Text style={styles.buttonText}>Upload Image</Text>
            </TouchableOpacity>
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.preview} />}
            <TouchableOpacity style={styles.addButton} onPress={handleAddUsage}>
              <Text style={styles.buttonText}>Confirm Usage</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={customModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Custom Service</Text>
            <TextInput
              style={styles.input}
              placeholder="Service Name"
              value={customName}
              onChangeText={setCustomName}
            />
            <TextInput
              style={styles.input}
              placeholder="Unit (e.g., minutes, gallons)"
              value={customUnit}
              onChangeText={setCustomUnit}
            />
            <TextInput
              style={styles.input}
              placeholder="Rate ($ per unit)"
              keyboardType="numeric"
              value={customRate}
              onChangeText={setCustomRate}
            />
            <TouchableOpacity style={styles.addButton} onPress={confirmAddCustomService}>
              <Text style={styles.buttonText}>Add Service</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCustomModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Tracker;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#e0f7fa' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#2ecc71' },
  usageBox: { marginBottom: 25, padding: 15, backgroundColor: '#f4f4f4', borderRadius: 10 },
  label: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  image: { width: '100%', height: 150, backgroundColor: '#ccc', marginBottom: 10, borderRadius: 10 },
  amount: { fontSize: 16 },
  result: { fontSize: 16, fontWeight: 'bold', color: '#2980b9' },
  addButton: { marginTop: 10, backgroundColor: '#3498db', padding: 10, borderRadius: 8, alignItems: 'center' },
  customButton: { marginVertical: 20, backgroundColor: '#8e44ad', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' },
  modalContent: { width: '85%', backgroundColor: '#fff', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
    color: '#000000', // pure black
    fontWeight: 'bold', // makes it darker/thicker
    fontSize: 16, // slightly larger for better readability
  },
  imageButton: { backgroundColor: '#27ae60', padding: 10, borderRadius: 8, marginBottom: 10 },
  preview: { width: 200, height: 200, borderRadius: 10, marginBottom: 10 },
  cancelText: { color: 'red', marginTop: 10 },
  tapToAdd: { marginTop: 5, color: '#888', fontStyle: 'italic' },
});