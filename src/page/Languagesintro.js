import React, { useState } from 'react'
import { Box, Center, Heading, Button, HStack, Text, ScrollView } from "native-base";
import { ImageBackground } from "react-native";
import styles from '../common/FormStyles';
import Images from '../common/Images'
import { useTranslation } from "react-i18next";


const Languagesintro = () => {

  
  const { t, i18n } = useTranslation();

  return (
    <ScrollView>
      <ImageBackground source={Images.bodyBg}
        style={{ paddingHorizontal: 10 }}>

        <Center >
          <Box pb="5" >
            <Heading color="white" pb="6" pt="9" fontSize="2xl" fontWeight="bold" >{t('.about')}</Heading>
            <Text fontWeight="medium" color="white" fontSize="18" pb="6" ml="2">{t('.about')}</Text>
          </Box>

        </Center>
        <HStack space={4} justifyContent="center" mb="90%">
          <Button onPress={() => i18n.changeLanguage('en')} w="48%" bg="black" borderWidth="1" borderColor="white" pt='10' pb="10" mb="4">
            {i18n.language == 'en' && (<Text color={'white'}>DOT</Text>)}
            <Text color="white" fontSize="2xl" >English</Text>
            <Text fontSize="xs" color="yellow.600" ml="5" pt="3" >English</Text>
          </Button>
          <Button onPress={() => i18n.changeLanguage('hi')} w="48%" bg="black" borderWidth="1" borderColor="white" pt='10' pb="10" mb="4">
            {i18n.language == 'hi' && (<Text color={'white'}>DOT</Text>)}
            <Text color="white" fontSize="2xl">हिंदी</Text>
            <Text fontSize="xs" color='yellow.600' ml="2" pt="3">Hindi</Text>
          </Button>
        </HStack>

      </ImageBackground>
    </ScrollView>


  )
}
export default Languagesintro