import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function AuthenticationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentication</Text>
      <Text style={styles.body}>Run face detection and liveness checks in parallel before embedding comparison and local verification.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#0B1220' },
  title: { color: '#F8FAFC', fontSize: 28, fontWeight: '700', marginBottom: 12 },
  body: { color: '#CBD5E1', fontSize: 16, lineHeight: 22 }
});