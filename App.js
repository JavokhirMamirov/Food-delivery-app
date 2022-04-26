import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import CustomDrawer from './navigation/CustomDrawer';
import { MainLayout } from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Home"}
      >
        <Stack.Screen
          name='Home'
          component={CustomDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App