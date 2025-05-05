import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';

const rebateData = {
  "Los Angeles": [
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "Weather-Based Irrigation Controller",
      rebate: "Up to $200",
      provider: "Weather Water",
      url: "https://example.com/weather"
    },
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
    {
      appliance: "Faucet Aerators",
      rebate: "Free",
      provider: "Water Efficiency Program",
      url: "https://example.com/aerator"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
    {
      appliance: "Rain Barrel",
      rebate: "$35 per barrel",
      provider: "Rainwater Harvesting",
      url: "https://example.com/rainbarrel"
    },
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
  ],
  "San Diego": [
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
    {
      appliance: "Weather-Based Irrigation Controller",
      rebate: "Up to $200",
      provider: "Weather Water",
      url: "https://example.com/weather"
    },
    {
      appliance: "Rain Barrel",
      rebate: "$35 per barrel",
      provider: "Rainwater Harvesting",
      url: "https://example.com/rainbarrel"
    },
    {
      appliance: "Faucet Aerators",
      rebate: "Free",
      provider: "Water Efficiency Program",
      url: "https://example.com/aerator"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "High-Efficiency Clothes Washer",
      rebate: "$100-$150",
      provider: "Laundry Rebate Program",
      url: "https://example.com/washer"
    },
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
  ],
  "San Jose": [
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "High-Efficiency Clothes Washer",
      rebate: "$100-$150",
      provider: "Laundry Rebate Program",
      url: "https://example.com/washer"
    },
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
    {
      appliance: "Smart Irrigation Controller",
      rebate: "Up to $200",
      provider: "Smart Water Program",
      url: "https://example.com/controller"
    },
    {
      appliance: "Weather-Based Irrigation Controller",
      rebate: "Up to $200",
      provider: "Weather Water",
      url: "https://example.com/weather"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
  ],
  "Fresno": [
    {
      appliance: "Smart Irrigation Controller",
      rebate: "Up to $200",
      provider: "Smart Water Program",
      url: "https://example.com/controller"
    },
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "High-Efficiency Clothes Washer",
      rebate: "$100-$150",
      provider: "Laundry Rebate Program",
      url: "https://example.com/washer"
    },
    {
      appliance: "Faucet Aerators",
      rebate: "Free",
      provider: "Water Efficiency Program",
      url: "https://example.com/aerator"
    },
    {
      appliance: "Weather-Based Irrigation Controller",
      rebate: "Up to $200",
      provider: "Weather Water",
      url: "https://example.com/weather"
    },
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
  ],
  "Sacramento": [
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
    {
      appliance: "Smart Irrigation Controller",
      rebate: "Up to $200",
      provider: "Smart Water Program",
      url: "https://example.com/controller"
    },
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "Weather-Based Irrigation Controller",
      rebate: "Up to $200",
      provider: "Weather Water",
      url: "https://example.com/weather"
    },
    {
      appliance: "Rain Barrel",
      rebate: "$35 per barrel",
      provider: "Rainwater Harvesting",
      url: "https://example.com/rainbarrel"
    },
    {
      appliance: "Faucet Aerators",
      rebate: "Free",
      provider: "Water Efficiency Program",
      url: "https://example.com/aerator"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
  ],
  "Long Beach": [
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "Weather-Based Irrigation Controller",
      rebate: "Up to $200",
      provider: "Weather Water",
      url: "https://example.com/weather"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
    {
      appliance: "Rain Barrel",
      rebate: "$35 per barrel",
      provider: "Rainwater Harvesting",
      url: "https://example.com/rainbarrel"
    },
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
    {
      appliance: "High-Efficiency Clothes Washer",
      rebate: "$100-$150",
      provider: "Laundry Rebate Program",
      url: "https://example.com/washer"
    },
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
  ],
  "Santa Rosa": [
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "Smart Irrigation Controller",
      rebate: "Up to $200",
      provider: "Smart Water Program",
      url: "https://example.com/controller"
    },
    {
      appliance: "High-Efficiency Clothes Washer",
      rebate: "$100-$150",
      provider: "Laundry Rebate Program",
      url: "https://example.com/washer"
    },
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
    {
      appliance: "Rain Barrel",
      rebate: "$35 per barrel",
      provider: "Rainwater Harvesting",
      url: "https://example.com/rainbarrel"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
    {
      appliance: "Faucet Aerators",
      rebate: "Free",
      provider: "Water Efficiency Program",
      url: "https://example.com/aerator"
    },
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
  ],
  "Irvine": [
    {
      appliance: "Faucet Aerators",
      rebate: "Free",
      provider: "Water Efficiency Program",
      url: "https://example.com/aerator"
    },
    {
      appliance: "Smart Irrigation Controller",
      rebate: "Up to $200",
      provider: "Smart Water Program",
      url: "https://example.com/controller"
    },
    {
      appliance: "Rain Barrel",
      rebate: "$35 per barrel",
      provider: "Rainwater Harvesting",
      url: "https://example.com/rainbarrel"
    },
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "High-Efficiency Clothes Washer",
      rebate: "$100-$150",
      provider: "Laundry Rebate Program",
      url: "https://example.com/washer"
    },
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
  ],
  "Pasadena": [
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
    {
      appliance: "Rain Barrel",
      rebate: "$35 per barrel",
      provider: "Rainwater Harvesting",
      url: "https://example.com/rainbarrel"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
    {
      appliance: "Smart Irrigation Controller",
      rebate: "Up to $200",
      provider: "Smart Water Program",
      url: "https://example.com/controller"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
    {
      appliance: "High-Efficiency Clothes Washer",
      rebate: "$100-$150",
      provider: "Laundry Rebate Program",
      url: "https://example.com/washer"
    },
  ],
  "Stockton": [
    {
      appliance: "Weather-Based Irrigation Controller",
      rebate: "Up to $200",
      provider: "Weather Water",
      url: "https://example.com/weather"
    },
    {
      appliance: "Faucet Aerators",
      rebate: "Free",
      provider: "Water Efficiency Program",
      url: "https://example.com/aerator"
    },
    {
      appliance: "High-Efficiency Clothes Washer",
      rebate: "$100-$150",
      provider: "Laundry Rebate Program",
      url: "https://example.com/washer"
    },
    {
      appliance: "Rotating Sprinkler Nozzles",
      rebate: "$3 per nozzle",
      provider: "WaterSmart",
      url: "https://example.com/nozzles"
    },
    {
      appliance: "Efficient Dishwasher",
      rebate: "$100 rebate",
      provider: "Energy Efficient Home",
      url: "https://example.com/dishwasher"
    },
    {
      appliance: "Showerhead Retrofit Kit",
      rebate: "Free kit",
      provider: "Energy Saver Program",
      url: "https://example.com/showerhead"
    },
    {
      appliance: "Turf Replacement",
      rebate: "$2-$4 per sq ft",
      provider: "Landscape Program",
      url: "https://example.com/turf"
    },
    {
      appliance: "Greywater Kit",
      rebate: "$75",
      provider: "Greywater Initiative",
      url: "https://example.com/greywater"
    },
    {
      appliance: "High-Efficiency Toilet",
      rebate: "$50-$150",
      provider: "City Utility",
      url: "https://example.com/toilet"
    },
    {
      appliance: "Hot Water Recirculation System",
      rebate: "$150",
      provider: "Hot Water Save",
      url: "https://example.com/hotwater"
    },
  ],
};

const RebateFinder = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select a City</Text>

      {Object.keys(rebateData).map((city) => (
        <TouchableOpacity
          key={city}
          style={styles.cityButton}
          onPress={() => setSelectedCity(city)}
        >
          <Text style={styles.cityText}>{city}</Text>
        </TouchableOpacity>
      ))}

      {selectedCity && (
        <>
          <Text style={styles.subtitle}>{selectedCity} Rebates:</Text>
          {rebateData[selectedCity].map((rebate, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{rebate.appliance}</Text>
              <Text style={styles.cardText}>Rebate: {rebate.rebate}</Text>
              <Text style={styles.cardText}>Provider: {rebate.provider}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(rebate.url)}>
                <Text style={styles.link}>View Program ↗</Text>
              </TouchableOpacity>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default RebateFinder;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 80,
    paddingHorizontal: 24,
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0077be',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0077be',
    marginTop: 30,
    marginBottom: 10,
  },
  cityButton: {
    backgroundColor: '#0077be',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  cityText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0077be',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  link: {
    color: '#0077be',
    fontSize: 14,
    marginTop: 8,
    textDecorationLine: 'underline',
  },
});
