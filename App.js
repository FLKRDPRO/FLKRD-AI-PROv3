import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const [webError, setWebError] = useState(null);

  if (webError) {
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
      // Full-screen, no header, no splash, no navbar
    />
  );
}

const styles = StyleSheet.create({
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
