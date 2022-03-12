import React, { useState } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, Box, Text, Center, Button, useColorMode, Image } from "native-base";
import styles from '../common/FormStyles'
import { useTranslation } from "react-i18next";
import Images from '../common/Images'

const Splash= () => {
    const { t } = useTranslation();
    // const { colorMode, toggleColorMode } = useColorMode()


    return (


        <Box style={styles.container}>

            

            <ScrollView>
                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >

                    <Center>
                        <Image source={{
                            uri: Images.loginLogo
                        }} h='289' w='246' mt='35%' mb='35%' />


                        <Text fontSize="sm" color='white' fontWeight='500' mt='20'>{t('sponsers')}</Text>
                    </Center>
                    <Box mt='9' mb='30' justifyContent='space-between' flexDirection='row'>

                        <ScrollView horizontal={true}>


                            <Image h='5' w='100' mr='5' source={{
                                uri: Images.facebookImg
                            }} />

                            <Image source={{
                                uri: Images.paytmImg
                            }} w='62' mr='5' />

                            <Image source={{
                                uri: Images.atosImg
                            }} w='62' mr='5' />

                            <Image source={{
                                uri: Images.visaImg
                            }} w='62' mr='5' />

                            <Image source={{
                                uri: Images.atosImg
                            }} w='62' mr='5' />

                            <Image source={{
                                uri: Images.visaImg
                            }} w='62' mr='5' />

                        </ScrollView>

                    </Box>

                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default Splash