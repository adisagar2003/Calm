import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name="Home" component={Welcome}   options={{headerShown: false}} />
    <Stack.Screen name="Dashboard" component={Dashboard}    options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

