import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import BottomTabRouter from './BottomTabRouter'

const Stack = createStackNavigator()

const Router = () => {
    return <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Navigation">
          <Stack.Screen name={"Navigation"} component={BottomTabRouter}/>
      </Stack.Navigator>
  </NavigationContainer>
  
}

export default Router