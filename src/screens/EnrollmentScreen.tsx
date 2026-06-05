import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function EnrollmentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enrollment</Text>
      <Text style={styles.body}>Capture 5 samples, build embeddings, encrypt locally, and associate them with an employee ID.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#0B1220' },
  title: { color: '#F8FAFC', fontSize: 28, fontWeight: '700', marginBottom: 12 },
  body: { color: '#CBD5E1', fontSize: 16, lineHeight: 22 }
});