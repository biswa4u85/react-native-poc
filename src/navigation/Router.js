import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import BottomTabRouter from './BottomTabRouter'
import Home from '../page/Home'
import DidyouknowDetail from '../page/DidyouknowDetail'

const Stack = createStackNavigator()

const Router = () => {
    return <DidyouknowDetail />
  
}

export default Router