import React, { useState } from 'react'
import { ImageBackground, ScrollView } from "react-native";
import { Heading, Box, Text, Center, Button, VStack, Image, HStack } from "native-base";
import styles from '../common/FormStyles'
import { useTranslation } from "react-i18next";
import Images from '../common/Images'

const Didyouknow = () => {
    const { t } = useTranslation();
  


    return (

        <Box style={styles.container}>



            <ScrollView>
                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >

                    <ImageBackground
                        source={Images.amitabh}
                        style={styles.car}

                    >
                        <Text fontSize="lg" color="primary.50" bold mt="25" >{t('amitabhheading')}</Text>
                        <Box w="20">
                            <Button size="lg" variant="link">{t('readbutton')}</Button>
                        </Box>
                    </ImageBackground>



                    <ImageBackground
                        source={Images.amitabh}
                        style={styles.car}

                    >
                        <Text fontSize="lg" color="primary.50" bold mt="25" >{t('shahrukhancar')}</Text>
                        <Box w="20">
                            <Button size="lg" variant="link">{t('readbutton')}</Button>
                        </Box>
                    </ImageBackground>


                    <ImageBackground
                        source={Images.amitabh}
                        style={styles.car}

                    >
                        <Text fontSize="lg" color="primary.50" bold mt="20" >{t('ranbirkapoor')}</Text>
                        <Box w="20">
                            <Button size="lg" variant="link">{t('readbutton')}</Button>
                        </Box>
                    </ImageBackground>




                    {/*  Did you know - search  no result */}


                    <Center>

                        <Image mt="40" source={{
                            uri: Images.didyoustar
                        }} size="xl" />

                        <Text fontSize="2xl" color="primary.50" bold mt="10" ml="5" >{t('didsearch')} </Text>

                    </Center>


                    <Box mt="15">
                        <Button mt="10" size="sm" mb="70" m="20" onPress={() => console.log("hello world")}>{t('didagain')}  </Button>
                    </Box>

                    {/* Contest listing_Your history */}


                    <HStack space={10} rounded="md" borderWidth="1" borderColor="primary.50" px="5" py="5"  >
                        <Box >
                            <Text fontSize="xs" color="muted.400">{t('contesdate')}</Text>
                            <Text fontSize="lg" color="primary.50" bold mt="3" > {t('sharukh')}</Text>
                            <Text color="yellow.500" bold mt="3"> {t('sarukhnumber')} <Text color="primary.50"> {t('sarukhquestion')}</Text></Text>


                            <Box w="20" mt="5" ml="5">
                                <Button size="lg" variant="link" bold ml="6">{t('sarukhdownload')}</Button>
                            </Box>
                        </Box>

                        <Box>
                            <Text>Kal Ho Naa Ho</Text>


                            <Box mt="10">
                                <Button size="sm" mt="5" onPress={() => console.log("hello world")}>{t('didagain')}  </Button>
                            </Box>
                        </Box>
                        {/* <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} /> */}
                    </HStack>
               

                </ImageBackground>


            </ScrollView>
        </Box>
    )
}
export default Didyouknow