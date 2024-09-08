import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import login from "./src/screens/LoginScreen";
import registros from "./src/screens/RegisterScreen";
import entrada from "./src/screens/EntradaScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="registro" component={registros} />
      <Stack.Screen name="entrada" component={entrada} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
