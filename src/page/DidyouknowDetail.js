import React, { useState } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, View, Box, Text, Center, Button, useColorMode, Image } from "native-base";
import {styles, Images} from '../common'
import {Icons} from '../components'
import { useTranslation } from "react-i18next";

const DidyouknowDetail = () => {
    const { t } = useTranslation();

    return (
        <Box style={styles.container}>

            <ScrollView>

            <Icons
                name='tools'
                font='Entypo'
                color='green'
                size={20}
            />

                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >


                    <Center mb='10'>

                        <Image mt="5" source={{
                            uri: Images.amitabh
                        }} size="2xl" w="100%" />

                        < Text fontSize="md" color="yellow.600" fontWeight='semibold' >
                        {t('didyouknowTitle')}
                        </Text>

                        < Text fontSize="sm" color="white" fontWeight='semibold' mt="3">
                        {t('didyouknowAbout')}
                        </Text>

                        < Text fontSize="sm" color="white" fontWeight='semibold' mt="5" >
                        {t('didyouknowMore')}
                        </Text>

                        < Text fontSize="sm" color="white" fontWeight='semibold' mt="5" >
                        {t('didyouknowMore')}
                        </Text>
                        < Text fontSize="sm" color="white" fontWeight='semibold' mt="5" >
                        {t('didyouknowMore')}
                        </Text>
                        < Text fontSize="sm" color="white" fontWeight='semibold' mt="5" >
                        {t('didyouknowMore')}
                        </Text>


                    </Center>



                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default DidyouknowDetail