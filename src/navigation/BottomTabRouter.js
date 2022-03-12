import React, {useEffect, useState} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Animated, TouchableHighlight, Icon} from "react-native";
import { Image,  View,  Text } from "native-base";
import styled from "styled-components/native";
import Images from '../common/Images'

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

const Tab = createBottomTabNavigator();

const BottomTabRouter = () => {

    const pages = [
        {
          title: "Home",
          screen: Home,
          img: [Images.paytmImg, Images.atosImg],
        },
        {
          title: "Account",
          screen: Splash,
          img: [Images.paytmImg, Images.atosImg],
        },
        {
          title: "Facts",
          screen: Home,
          img: [Images.paytmImg, Images.atosImg],
        },
        {
          title: "Contests",
          screen: Splash,
          img: [Images.paytmImg, Images.atosImg],
        },
      ]
   
  const [focusedTab, setFocusedTab] = useState(1)
  const mappable = [0, 1, 2, 3, 4]

  const boxSizes = mappable.map((item, index) => {
    return useState(index === focusedTab ? new Animated.Value(70) : new Animated.Value(50))[0]
  })

  const topMargins = mappable.map((item, index) => {
    return useState(index === focusedTab ? new Animated.Value(-45) : new Animated.Value(-10))[0]
  })

  useEffect(() => {
    boxSizes.forEach((s, index) => {
      let value = focusedTab === index ? 70 : 50
      Animated.timing(s, {
        toValue: value,
        duration: 200,
        useNativeDriver: false
      }).start()
    })
    topMargins.forEach((s, index) => {
      let value = focusedTab === index ? -45 : -10
      Animated.timing(s, {
        toValue: value,
        duration: 200,
        useNativeDriver: false
      }).start()
    })
  }, [focusedTab])


    const TabWrapper = styled.View`
      display: flex;
      flex: 1;
      flex-direction: row;
      align-self: stretch;
      justify-content: center;
      align-content: center;
    `

    const IconWrapper = styled(Animated.View)`
      position: relative;
      width: 70px;
      height: 70px;
      justify-content: center;
      margin-top: -10px;
      border-radius: 35px;
    `

    const TabBarBg = styled.View`
      background-color: #ff0000;
      display: flex;
      flex: 1;
    `

    return <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {position: 'absolute'},
        tabBarBackground: () => (
          <TabBarBg/>
        ),
      }}>
        {pages.map((page, index) => (
          <Tab.Screen name={page.title}
                      options={{
                        tabBarIcon: ({focused}) => <TabWrapper>
                          <IconWrapper style={{
                            marginTop: topMargins[index],
                            width: boxSizes[index],
                            height: boxSizes[index]
                          }}>
                            <View><Image source={focused ? page.img[1] : page.img[0]} alt=""  size="sm" /></View>
                          </IconWrapper>
                        </TabWrapper>
                      }}
                      listeners={{
                        tabPress: e => {
                          setFocusedTab(index)
                        },
                      }}
                      component={page.screen}
                      >
          </Tab.Screen>)
        )}
      </Tab.Navigator>
  
}

export default BottomTabRouter