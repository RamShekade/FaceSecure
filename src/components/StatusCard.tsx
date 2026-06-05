import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusCardProps extends PropsWithChildren {
  title: string;
  value: string;
}

export function StatusCard({ title, value, children }: StatusCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#111827', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#1F2937' },
  title: { color: '#94A3B8', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 },
  value: { color: '#F8FAFC', fontSize: 18, fontWeight: '700', marginTop: 6 }
});