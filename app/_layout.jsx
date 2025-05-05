import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const RootLayout  = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{title: 'Login'}} />
        <Stack.Screen name="tips" options={{title: 'Tips'}} />
        <Stack.Screen name="dashboard" options={{title: 'Dashboard'}} />
        <Stack.Screen name="comparison" options={{title: 'Compare Products'}} />
        <Stack.Screen name="tracker" options={{title: 'Tracker'}} />
        <Stack.Screen name="rebatesfinder" options={{title: 'Rebates'}} />
        <Stack.Screen name="data" options={{title: 'Data'}} />
        <Stack.Screen name="weatherscreen" options={{title: 'Alerts'}} />
    </Stack>
  )
}

export default RootLayout;

const styles = StyleSheet.create({})