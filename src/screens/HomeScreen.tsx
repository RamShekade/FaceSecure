import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/AppNavigator';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FaceSecure</Text>
      <Text style={styles.subtitle}>Offline facial authentication with liveness validation.</Text>
      <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Enrollment')}>
        <Text style={styles.buttonText}>Start Enrollment</Text>
      </Pressable>
      <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('Authentication')}>
        <Text style={styles.secondaryText}>Authenticate</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#0B1220'
  },
  title: {
    color: '#F8FAFC',
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 12
  },
  subtitle: {
    color: '#CBD5E1',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 32
  },
  primaryButton: {
    backgroundColor: '#22C55E',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 12
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#334155',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center'
  },
  buttonText: {
    color: '#052E16',
    fontWeight: '700'
  },
  secondaryText: {
    color: '#E2E8F0',
    fontWeight: '600'
  }
});