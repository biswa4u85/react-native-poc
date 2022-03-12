import React, { useState } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, View, Box, Text, Center, Button, useColorMode, Image, HStack, ArrowBackIcon } from "native-base";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import { useTranslation } from "react-i18next";
// import { Ionicons, AntDesign } from "react-native-vector-icons";



const GiftcardBefore= () => {
    const { t } = useTranslation();

    return (


        <Box style={styles.container}>

            <ScrollView>
                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >
                    <HStack my='10'>
                        {/* <AntDesign name={"arrowleft"} size={30} color={'#fffff'} /> */}
                        <ArrowBackIcon size="6" color='white' mr='3' />,
                        <Text fontSize='md' color='white' fontWeight='medium'>{t('giftCardHeading')}</Text>

                    </HStack>

                    <HStack>

                        <Image source={{
                            uri: Images.amazonlogo
                        }} h='10' w='10' />
                        <Box>
                            <Text fontSize='sm' color='white'>Gift card from</Text>
                            <Text fontSize='sm' color='white'>www.amazon.in</Text>

                        </Box>
                    </HStack>



                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default GiftcardBefore