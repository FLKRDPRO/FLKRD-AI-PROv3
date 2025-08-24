import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

// Prevent auto-hide of splash until ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [webError, setWebError] = useState(null);

  useEffect(() => {
    // Simulate splash duration (2s) and asset loading
    setTimeout(async () => {
      setIsReady(true);
      await SplashScreen.hideAsync();
    }, 2000); // 2 seconds splash
  }, []);

  if (!isReady) {
    // Splash screen with multiple logos
    return (
      <View style={styles.splashContainer}>
        <Image source={require('./assets/logo1.png')} style={styles.logo} />
        <Image source={require('./assets/logo2.png')} style={styles.logo} />
        <Text style={styles.appTitle}>Welcome to ZanaAI</Text>
        <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />
      </View>
    );
  }

  if (webError) {
    // Error handling UI
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Oops! Something went wrong loading the app.</Text>
        <Text style={styles.errorSubText}>{webError}</Text>
        <TouchableOpacity onPress={() => setWebError(null)} style={styles.retryButton}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <WebView
      source={{ uri: 'https://zanaai.vercel.app' }}
      style={{ flex: 1 }}
      onError={syntheticEvent => {
        setWebError(syntheticEvent.nativeEvent.description);
      }}
      startInLoadingState
      renderLoading={() => (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}
      // Hide header, navbar, etc. (WebView is full-screen)
      // No navigation or header used
    />
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    margin: 10,
    resizeMode: 'contain',
  },
  appTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#222',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
    textAlign: 'center',
  },
  errorSubText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  retryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});