import React, { useState } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, View, Box, Text, Center, Button, Input, Image, HStack, SearchIcon, Actionsheet, useDisclose } from "native-base";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import Filter from '../components/Filter'
import { useTranslation } from "react-i18next";


const ContestLanding = () => {
    const { t } = useTranslation();


    

    return (


        <Box style={styles.container}>

            <ScrollView>
                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >

                    <Filter />

                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default ContestLanding