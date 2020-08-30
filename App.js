import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Recognition from './FaceRecogniton'
import Background from './Background'

const Stack = createStackNavigator();

App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SelectCourse'>
      <Stack.Screen name="Recognition" component={Recognition} />
      <Stack.Screen name="SelectCourse" component={Background} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;