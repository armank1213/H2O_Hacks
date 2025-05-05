import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const Dashboard = () => {
  const [isPeakTime, setIsPeakTime] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkPeakTime = () => {
      const currentHour = new Date().getHours();
      if ((currentHour >= 6 && currentHour < 9) || (currentHour >= 16 && currentHour < 20)) {
        setIsPeakTime(true);
      } else {
        setIsPeakTime(false);
      }
    };

    const interval = setInterval(checkPeakTime, 60000);
    checkPeakTime();

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1050&q=80',
      }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        {isPeakTime && (
          <View style={styles.notification}>
            <Text style={styles.notificationText}>Peak Water Usage Hours</Text>
          </View>
        )}

        <Text style={[styles.header, isPeakTime && styles.headerRed]}>Dashboard</Text>

        <TouchableOpacity
          style={[styles.fullWidthButton, isPeakTime && styles.buttonRed]}
          onPress={() => router.push('/tracker')}
        >
          <Text style={styles.buttonText}>Expense Tracker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fullWidthButton, isPeakTime && styles.buttonRed]}
          onPress={() => router.push('/comparison')}
        >
          <Text style={styles.buttonText}>Compare Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fullWidthButton, isPeakTime && styles.buttonRed]}
          onPress={() => router.push('/weatherscreen')}
        >
          <Text style={styles.buttonText}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fullWidthButton, isPeakTime && styles.buttonRed]}
          onPress={() => router.push('/rebatesfinder')}
        >
          <Text style={styles.buttonText}>Tools</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.fullWidthButton, isPeakTime && styles.buttonRed]}
          onPress={() => router.push('/tips')}
        >
          <Text style={styles.buttonText}>Water-Saving Tips</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    paddingVertical: 150,
    paddingHorizontal: 24,
    minHeight: '100%',
    backgroundColor: 'rgba(224, 247, 250, 0.8)',
  },
  notification: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 30,
    textAlign: 'center',
  },
  headerRed: {
    color: 'red',
  },
  fullWidthButton: {
    backgroundColor: '#3498db',
    paddingVertical: 18,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
