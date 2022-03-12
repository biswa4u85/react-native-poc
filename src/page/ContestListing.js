import React, { useState, useEffect } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, View, Box, Text, Center, Button, useColorMode, Image, HStack } from "native-base";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import { useTranslation } from "react-i18next";

import { useSelector, useDispatch } from 'react-redux'
import { listAllTrivias } from '../store/TriviaRedux'


const ContestListing = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const allTrivias = useSelector((state) => state.trivia.allTrivias)

    useEffect(() => {
        dispatch(listAllTrivias({ token }))
    }, []);

    // console.log(allTrivias)

    return (


        <Box style={styles.container}>

            <ScrollView>
                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >
                    <Box background="black" borderRadius="2" mb="5" >
                        <HStack space={3} justifyContent="center">

                            <Box>
                                <Text color="white" fontSize="sm" mr="20" mt="20" mb="1" >{t('take')}</Text>
                                <Text color="white" fontSize="xl" mr="20" fontWeight="bold" mb="3" >{t('shan')}  </Text>
                                <Text color="white" fontSize="sm" mr="20" mb="5" > <Text fontWeight="bold" >10</Text>Days  <Text fontWeight="bold">22</Text>Hours  <Text fontWeight="bold">43</Text>Mins</Text>
                                <Text color="yellow.600" fontSize="sm" mr="20" mb="5" >{t('now')} </Text>
                            </Box>
                            <Image h='100' w='100' source={{
                                uri: Images.srk
                            }} />

                        </HStack>
                    </Box>

                    <Box background="black" borderRadius="2" mb="5" >
                        <HStack space={3} justifyContent="center">

                            <Image h='100' w='100' source={{
                                uri: Images.harshitagaurimg
                            }} />

                            <Box>
                                <Text color="white" fontSize="xl" mt="10" mb="1" fontWeight="bold" >{t('har')} </Text>
                                <Text color="muted.700" fontSize="md" mr="20" mb="3" >{t('fee')} </Text>
                            </Box>

                            <Box alignItems="flex-end" mt='10' mr='10'>
                                <Button>{t('enterNow')}</Button>
                            </Box>
                        </HStack>
                    </Box>
                    <Box background="black" borderRadius="2" mb="5" >
                        <HStack space={3} justifyContent="center">

                            <Image h='100' w='100' source={{
                                uri: Images.harshitagaurimg
                            }} />

                            <Box>
                                <Text color="white" fontSize="xl" mt="10" mb="1" fontWeight="bold" >{t('har')}</Text>
                                <Text color="muted.700" fontSize="md" mr="20" mb="3" >{t('fee')}</Text>
                            </Box>

                            <Box alignItems="flex-end" mt='10' mr='10'>
                                <Button>{t('enterNow')}</Button>
                            </Box>
                        </HStack>

                    </Box>
                    <Box background="black" borderRadius="2" mb="10" >
                        <HStack space={3} justifyContent="center">

                            <Image h='100' w='100' source={{
                                uri: Images.harshitagaurimg
                            }} />

                            <Box>
                                <Text color="white" fontSize="xl" mt="10" mb="1" fontWeight="bold" >{t('har')}</Text>
                                <Text color="muted.700" fontSize="md" mr="20" mb="3" >{t('fee')}</Text>
                            </Box>

                            <Box alignItems="flex-end" mt='10' mr='10'>
                                <Button>{t('enterNow')}</Button>
                            </Box>
                        </HStack>

                    </Box>

                    {/* upcomming_sec */}

                    <HStack justifyContent='space-between' flexWrap='wrap' mt='5'>
                        <Box w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4' >

                            <Image h='40' w='100' source={{
                                uri: Images.harshitagaurimg
                            }} />
                            <Text fontSize="md" color='white' fontWeight="bold" mt='3' ml="5">{t('har')}</Text>
                            <Text fontSize="sm" color='yellow.600' mt='2' textAlign='center'>{t('Starts on Feb 12, 2022')} </Text>

                        </Box>
                        <Box w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4' >

                            <Image h='40' w='100' source={{
                                uri: Images.harshitagaurimg
                            }} />
                            <Text fontSize="md" color='white' fontWeight="bold" mt='3' ml="5">{t('har')}</Text>
                            <Text fontSize="sm" color='yellow.600' mt='2' textAlign='center'>{t('Starts on Feb 12, 2022')} </Text>

                        </Box>
                        <Box w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4' >

                            <Image h='40' w='100' source={{
                                uri: Images.harshitagaurimg
                            }} />
                            <Text fontSize="md" color='white' fontWeight="bold" mt='3' ml="5">{t('har')}</Text>
                            <Text fontSize="sm" color='yellow.600' mt='2' textAlign='center'>{t('Starts on Feb 12, 2022')} </Text>

                        </Box>

                        <Box w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4' >

                            <Image h='40' w='100' source={{
                                uri: Images.harshitagaurimg
                            }} />
                            <Text fontSize="md" color='white' fontWeight="bold" mt='3' ml="5">{t('har')}</Text>
                            <Text fontSize="sm" color='yellow.600' mt='2' textAlign='center'>{t('Starts on Feb 12, 2022')} </Text>

                        </Box>

                    </HStack>



                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default ContestListing