import React from 'react'
import { ImageBackground, ScrollView, Dimensions } from "react-native";
import { Center, Text, Image, Box, Button } from "native-base";
import Images from '../common/Images'
import { useTranslation } from "react-i18next";

const Onboardingscreen = () => {

    const { t } = useTranslation();

    return (
        <ScrollView >
            <ImageBackground
                source={Images.bodyBg}
                style={{ paddingHorizontal: 10 }}
            >

                <ScrollView horizontal={true}>
                    {/* <Box> */}
                    <Center>

                        <Image alignItems="center" mt="95" source={{
                            uri: Images.onboarding
                        }} size="xl" />

                        <Center mb="100" >

                            < Text color="yellow.400" fontSize="sm" bold mt="79" mb="3">
                                {t('signup')}
                            </Text>

                            < Text fontSize="sm" color="primary.50" bold textAlign="center">
                                {t('signupDec')}
                            </Text>

                            <Image h="10" w="10" mt="10" source={{
                                uri: Images.arrow
                            }} size="xs" />

                        </Center>

                    </Center>
                    {/* </Box> */}
                    <Center>

                        <Image alignItems="center" mt="95" source={{
                            uri: Images.onboardingContest
                        }} size="xl" />

                        <Center mb="100" >

                            < Text color="yellow.400" fontSize="sm" bold mt="79" mb="3">
                                {t('enterContest')}
                            </Text>

                            < Text fontSize="sm" color="primary.50" bold textAlign="center">
                                {t('signupDec')}
                            </Text>

                            <Image h="10" w="10" mt="10" source={{
                                uri: Images.arrow
                            }} size="xs" />

                        </Center>

                    </Center>
                    <Box>
                        <Center>

                            <Image alignItems="center" mt="95" source={{
                                uri: Images.onboardingContest
                            }} size="xl" />

                            <Center mb="100" >

                                < Text color="yellow.400" fontSize="sm" bold mt="79" mb="3">
                                    {t('enterContest')}
                                </Text>

                                < Text fontSize="sm" color="primary.50" bold textAlign="center">
                                    {t('signupDec')}
                                </Text>

                                <Image h="10" w="10" mt="10" source={{
                                    uri: Images.arrow
                                }} size="xs" />

                            </Center>
                        </Center>
                        <Button size="lg" mb='5' mt='10'>
                            {t('Getstarted')}
                        </Button>
                    </Box>
                </ScrollView>

            </ImageBackground>
        </ScrollView>
    )
}
export default Onboardingscreen


