import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login button pressed');
        // Logic needs to be added here for authentication
    }

    const handleForgotPassword = () => {
        Alert.alert('Forgot Password', 'Password reset link has been sent to your email.');
        // Logic needs to be added here for password reset
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput 
        style={styles.input} 
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
        autoCapitalize='none'
      />
      
      <TextInput 
        style={styles.input} 
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Button title='Login' color='#3498db' style={styles.buttonText}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/signup')}>
        <Text style={styles.footerText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 30,
        textAlign: 'center',
      },
      input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
      },
      forgotText: {
        textAlign: 'center',
        color: '#3498db',
        marginBottom: 20,
        textDecorationLine: 'underline',
      },
      buttonContainer: {
        marginBottom: 20,
      },
      footerText: {
        textAlign: 'center',
        color: '#3498db',
        marginTop: 10,
        textDecorationLine: 'underline',
      },
})