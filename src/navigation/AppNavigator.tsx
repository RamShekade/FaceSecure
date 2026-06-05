import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@/screens/HomeScreen';
import { EnrollmentScreen } from '@/screens/EnrollmentScreen';
import { AuthenticationScreen } from '@/screens/AuthenticationScreen';

export type RootStackParamList = {
  Home: undefined;
  Enrollment: undefined;
  Authentication: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'FaceSecure' }} />
      <Stack.Screen name="Enrollment" component={EnrollmentScreen} options={{ title: 'Enrollment' }} />
      <Stack.Screen name="Authentication" component={AuthenticationScreen} options={{ title: 'Authentication' }} />
    </Stack.Navigator>
  );
}