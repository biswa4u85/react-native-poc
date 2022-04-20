import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import BottomTabRouter from './BottomTabRouter'

import One from '../page/One'
import Splash from '../page/Splash'
import Home from '../page/Home'
import DidyouknowDetail from '../page/DidyouknowDetail'
import GiftcardAfter from '../page/GiftcardAfter'
import GiftcardBefore from '../page/GiftcardBefore'
import Payment from '../page/Payment'
import ContestListing from '../page/ContestListing'
import Languagesintro from '../page/Languagesintro'
import ContestLanding from '../page/ContestLanding'
import Onboardingscreen from '../page/Onboardingscreen'
import Didyouknow from '../page/Didyouknow'


const Stack = createStackNavigator()
const Router = () => {
    return <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Navigation">
          <Stack.Screen name={"Navigation"} component={BottomTabRouter}/>
      </Stack.Navigator>
  </NavigationContainer>
  
}

export default Router