import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { fetchWeatherSuggestions } from './weatherutils';

const WeatherScreen = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location is required to show weather tips.');
        setLoading(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = loc.coords;
      setLocation({ latitude, longitude });

      const tips = await fetchWeatherSuggestions(latitude, longitude);
      setSuggestions(tips);
      setLoading(false);
    };

    fetchWeather();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.header}>Today's Water Tips</Text>

          {loading ? (
            <ActivityIndicator size="large" color="#0077be" />
          ) : (
            <>
              {suggestions.map((tip, index) => (
                <View key={index} style={styles.card}>
                  <Text style={styles.tipText}>• {tip}</Text>
                </View>
              ))}

              {location && (
                <View style={styles.mapContainer}>
                  <Text style={styles.mapLabel}>Your Location</Text>
                  <MapView
                    style={styles.map}
                    initialRegion={{
                      latitude: location.latitude,
                      longitude: location.longitude,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }}
                  >
                    <Marker coordinate={location} title="You are here" />
                  </MapView>
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
  scrollContainer: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0077be',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  tipText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  mapContainer: {
    marginTop: 24,
    borderRadius: 12,
    overflow: 'hidden',
    borderColor: '#0077be',
    borderWidth: 1,
  },
  mapLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
    color: '#0077be',
  },
  map: {
    height: 250,
    width: Dimensions.get('window').width - 48,
  },
});
