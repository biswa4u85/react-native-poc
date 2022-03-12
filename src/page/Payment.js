import React, { useState } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, View, Box, Text, Center, Button, useColorMode, Image } from "native-base";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import { useTranslation } from "react-i18next";




const Payment= () => {
    const { t } = useTranslation();
    
    return (


        <Box style={styles.container}>

            <ScrollView>
                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >

                    
                    <Text color='white'>Payment</Text>



                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default Payment