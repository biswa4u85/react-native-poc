import React, { useState } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, View, Box, Text, Center, Button, useColorMode, Image, HStack } from "native-base";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import { useTranslation } from "react-i18next";




const GiftcardAfter = () => {
    const { t } = useTranslation();

    return (


        <Box style={styles.container}>

            <ScrollView>
                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >


                    <Center style={styles.container} textAlign="center" >
                        <HStack flexWrap='wrap' borderWidth="3" borderColor="yellow.600" borderRadius="20" mt="20" px="5">

                            {/* <Image source={{
                                uri: Images.giftcardlogo
                            }} size="xl" alignSelf="center" ml="20" mt="8" /> */}

                            
                            <Text fontSize="xl" mt="8" color="white" fontWeight="bold" >{t('giftcardHeading')}</Text>
                            <Text fontSize="sm" mt="25" color="white" mb="10" >{t('giftcarddec')}</Text>
                        </HStack>
                        <Text fontSize="sm" mt="80" color="white" >{t('redirectingText')}</Text>
                    </Center>

                    <Box>
                        <Button mb="10">{t('playContestbut')}</Button>
                    </Box>



                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default GiftcardAfter