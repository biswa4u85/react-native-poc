import React from 'react'
import { ImageBackground, ScrollView, Dimensions } from "react-native";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import { useTranslation } from "react-i18next";
import Config from '../common/Config'
import { Box, Text, Image, Center, Button, ArrowForwardIcon, Heading, HStack } from "native-base";


const Home= () => {
    const { t } = useTranslation();

    console.log(Config.width)

    return (
        <Box style={styles.container} pb='40'>

            <ScrollView>


                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >
                   


                    <Text fontSize="2xl" color='white' mt='10' mb='5' fontWeight='600'>{t('heading')} <Text color="yellow.600" >{t('heading2')}</Text></Text>

                    <Box style={{ marginVertical: 20 }}>
                        <ScrollView horizontal={true}>
                            {/* <View style={{ width: Config.width}}> */}
                            {/* <Box> */}
                            <ImageBackground
                                source={Images.shahrukkhanImg}
                                resizeMode="contain"
                                style={{ width: Config.width }}
                            >
                                <Box mt='5' >
                                    <Text fontSize="xs" color='yellow.600'>{t('entryFee')}</Text>
                                    <Text fontSize="sm" color='warmGray.50' mt='6'>{t('meet')}</Text>
                                    <Text fontSize="xl" color='warmGray.50' fontWeight='bold' mt='3' >{t('ShahName')}</Text>

                                    <Box style={{ paddingVertical: 7, flexDirection: 'row' }}>
                                        <Button size="lg" variant="link" colorScheme='yellow'>
                                            {t('enterNow')}
                                        </Button>
                                        <ArrowForwardIcon size="5" color="yellow.600" mt='3' />
                                    </Box>
                                    {/* <HStack > */}
                                    <Box flexDirection='row' justifyContent='space-between'>
                                        <Text fontSize="xs" color='gray.400' >{t('ticking')}</Text>
                                        <Text fontSize="xs" color='warmGray.50'>{t('time')}</Text>

                                    </Box>
                                    {/* </HStack> */}
                                </Box>


                            </ImageBackground>
                            {/* </Box> */}
                            {/* </View> */}

                            <ImageBackground
                                source={Images.shahrukkhanImg}
                                style={styles.shahruk}
                            >
                                <Box mt='5'>
                                    <Text fontSize="xs" color='yellow.600'>{t('entryFee')}</Text>
                                    <Text fontSize="sm" color='warmGray.50' mt='6'>{t('meet')}</Text>
                                    <Text fontSize="xl" color='warmGray.50' fontWeight='bold' mt='3' >{t('ShahName')}</Text>

                                    <Box style={{ paddingVertical: 7, flexDirection: 'row' }}>
                                        <Button size="lg" variant="link" colorScheme='yellow'>
                                            {t('enterNow')}
                                        </Button>
                                        <ArrowForwardIcon size="5" color="yellow.600" mt='3' />
                                    </Box>

                                    <Box flexDirection='row' justifyContent='space-between'>
                                        <Text fontSize="xs" color='gray.400'>{t('ticking')}</Text>
                                        <Text fontSize="xs" color='warmGray.50'>{t('time')}</Text>

                                    </Box>
                                </Box>


                            </ImageBackground>

                            <ImageBackground
                                source={Images.shahrukkhanImg}
                                style={styles.shahruk}
                            >
                                <Box mt='5'>
                                    <Text fontSize="xs" color='yellow.600'>{t('entryFee')}</Text>
                                    <Text fontSize="sm" color='warmGray.50' mt='6'>{t('meet')}</Text>
                                    <Text fontSize="xl" color='warmGray.50' fontWeight='bold' mt='3' >{t('ShahName')}</Text>

                                    <Box style={{ paddingVertical: 7, flexDirection: 'row' }}>
                                        <Button size="lg" variant="link" colorScheme='yellow'>
                                            {t('enterNow')}
                                        </Button>
                                        <ArrowForwardIcon size="5" color="yellow.600" mt='3' />
                                    </Box>

                                    <Box flexDirection='row' justifyContent='space-between'>
                                        <Text fontSize="xs" color='gray.400'>{t('ticking')}</Text>
                                        <Text fontSize="xs" color='warmGray.50'>{t('time')}</Text>

                                    </Box>
                                </Box>


                            </ImageBackground>

                        </ScrollView>
                    </Box>

                    {/* Avail benefits sec */}

                    <Box>
                        <Heading fontSize='2xl' bold mt='3' color='white'>{t('avail')} <Text color="yellow.600" >{t('benefit')}</Text></Heading>
                        <Text fontSize="sm" color='gray.400' mt='2'>{t('benefits')}</Text>
                    </Box>

                    <HStack justifyContent='space-between' flexWrap='wrap' mt='5'>
                        <Center w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4' >

                            <Image h='10' w='10' source={{
                                uri: Images.flightImg
                            }} />
                            <Text fontSize="xs" color='yellow.600' mt='3'>{t('flight')}</Text>
                            <Text fontSize="2xs" color='white' mt='2' textAlign='center'>{t('paragraph')}</Text>

                        </Center>

                        <Center w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4'>
                            <Image h='10' w='10' source={{
                                uri: Images.bitmapImg
                            }} />
                            <Text fontSize="xs" color='yellow.600' mt='3'>{t('hotels')}</Text>
                            <Text fontSize="2xs" color='white' mt='2' textAlign='center'>{t('paragraph')}</Text>

                        </Center>
                        <Center w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4'>
                            <Image h='10' w='10' source={{
                                uri: Images.amigoImg
                            }} />
                            <Text fontSize="xs" color='yellow.600' mt='3'>{t('amigo')}</Text>
                            <Text fontSize="2xs" color='white' mt='2' textAlign='center'>{t('paragraph')}</Text>

                        </Center>
                        <Center w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4'>
                            <Image h='10' w='10' source={{
                                uri: Images.gala
                            }} />
                            <Text fontSize="xs" color='yellow.600' mt='3'>{t('gala')}</Text>
                            <Text fontSize="2xs" color='white' mt='2' textAlign='center'>{t('paragraph')}</Text>

                        </Center>
                        <Center w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4'>
                            <Image h='10' w='10' source={{
                                uri: Images.amigoImg
                            }} />
                            <Text fontSize="xs" color='yellow.600' mt='3'>{t('lorem')}</Text>
                            <Text fontSize="2xs" color='white' mt='2' textAlign='center'>{t('paragraph')}</Text>

                        </Center>
                        <Center w="48%" bg="black" rounded="md" borderWidth='1' borderColor='primary.800' mb='4' p='4'>
                            <Image h='10' w='10' source={{
                                uri: Images.win
                            }} />
                            <Text fontSize="xs" color='yellow.600' mt='3'>{t('prizes')}</Text>
                            <Text fontSize="2xs" color='white' mt='2' textAlign='center'>{t('paragraph')}</Text>

                        </Center>

                    </HStack>

                    {/* Ongoing contests sec */}

                    <HStack justifyContent='space-between'>
                        <Box>
                            <Heading fontSize='2xl' bold mt='3' color='white'>{t('ongoing')} <Text color="yellow.600" >{t('contests')}</Text></Heading>
                            <Text fontSize="sm" color='gray.400' mt='2'>{t('hurryUp')}</Text>
                        </Box>

                        <Button size="lg" variant="link" mt='-3'>
                            {t('viewmore')}
                        </Button>
                    </HStack>

                    <ScrollView horizontal={true}>
                        <Box mt='7' mb='7'>
                            <ImageBackground
                                source={Images.harshitagaur}
                                style={{ height: 103, width: 374 }}


                            >
                                <HStack justifyContent='space-between' pt='6'>

                                    <Box ml='20' pl='7'>
                                        <Text fontSize="sm" color='white' mt='2'>{t('name')}</Text>
                                        <Text fontSize="xs" color='gray.400' mt='2'>{t('entryFee')}</Text>
                                    </Box>

                                    <Box alignItems="flex-end" mt='4' mr='5'>
                                        <Button>{t('enterNow')}</Button>
                                    </Box>
                                </HStack>

                            </ImageBackground>
                        </Box>

                        <Box mt='7' mb='7'>
                            <ImageBackground
                                source={Images.harshitagaur}
                                style={{ height: 103, width: 374 }}


                            >
                                <HStack justifyContent='space-between' pt='6'>

                                    <Box ml='20' pl='7'>
                                        <Text fontSize="sm" color='white' mt='2'>{t('name')}</Text>
                                        <Text fontSize="xs" color='gray.400' mt='2'>{t('entryFee')}</Text>
                                    </Box>

                                    <Box alignItems="flex-end" mt='4' mr='5'>
                                        <Button>{t('enterNow')}</Button>
                                    </Box>
                                </HStack>

                            </ImageBackground>
                        </Box>

                        <Box mt='7' mb='7'>
                            <ImageBackground
                                source={Images.harshitagaur}
                                style={{ height: 103, width: 374 }}


                            >
                                <HStack justifyContent='space-between' pt='6'>

                                    <Box ml='20' pl='7'>
                                        <Text fontSize="sm" color='white' mt='2'>{t('name')}</Text>
                                        <Text fontSize="xs" color='gray.400' mt='2'>{t('entryFee')}</Text>
                                    </Box>

                                    <Box alignItems="flex-end" mt='4' mr='5'>
                                        <Button colorScheme='yellow'>{t('enterNow')}</Button>
                                    </Box>
                                </HStack>

                            </ImageBackground>
                        </Box>

                    </ScrollView>

                    {/* Upcoming contests- sec */}

                    <HStack justifyContent='space-between'>
                        <Box>
                            <Heading fontSize='2xl' bold mt='3' color='white'>{t('upcoming')} <Text color="yellow.600" >{t('contests')}</Text></Heading>
                            <Text fontSize="sm" color='gray.400' mt='2'>{t('hurryUp')}</Text>
                        </Box>

                        <Button size="lg" variant="link" colorScheme='yellow' mt='-3'>
                            {t('viewmore')}
                        </Button>
                    </HStack>

                    <Box mt='7' mb='3'>
                        <ScrollView horizontal={true}>
                            <ImageBackground

                                source={Images.rohitsharma}
                                style={{ height: 151, width: 160, textAlign: 'center', marginRight: 5 }}
                            >
                                <Box mt='20'>
                                    <Text fontSize="sm" color='white' fontWeight='bold' mt='2'>{t('rohit')}</Text>
                                    <Text fontSize="2xs" color='white' mt='2'>{t('time')}</Text>
                                </Box>
                            </ImageBackground>

                            <ImageBackground
                                source={Images.harshita}
                                style={{ height: 151, width: 160, textAlign: 'center', marginRight: 5 }}
                            >
                                <Box mt='20'>
                                    <Text fontSize="sm" color='white' fontWeight='bold' mt='2'>{t('harshita')}</Text>
                                    <Text fontSize="2xs" color='white' mt='2'>{t('time')}</Text>
                                </Box>
                            </ImageBackground>

                            <ImageBackground
                                source={Images.rohitsharma}
                                style={{ height: 151, width: 160, textAlign: 'center', marginRight: 5 }}
                            >
                                <Box mt='20'>
                                    <Text fontSize="sm" color='white' fontWeight='bold' mt='2'>{t('rohit')}</Text>
                                    <Text fontSize="2xs" color='white' mt='2'>{t('time')}</Text>
                                </Box>
                            </ImageBackground>
                        </ScrollView>
                    </Box>

                    {/* Win your Dream-sec */}

                    <Box>
                        <Heading fontSize='2xl' bold mt='3' color='white'>{t('win')} <Text color="yellow.600" >{t('dream')} </Text></Heading>
                        <Text fontSize="sm" color='gray.400' mt='2'>{t('dreams')}</Text>
                    </Box>
                    <Box mt='10'>
                        <ScrollView horizontal={true}>
                            <ImageBackground
                                source={Images.enterquiz}
                                style={{ height: 278, width: 374, marginRight: 10 }}
                            >
                                <Box mt='15%' pl='37' pr='20%'>
                                    <Text fontSize='2xl' color='yellow.600' fontWeight='bold' pt='23%' pb='2' >{t('quiz')}</Text>
                                    <Text fontSize='md' color='white' lineHeight='22'>{t('paragraph')}</Text>
                                </Box>
                            </ImageBackground>

                            <ImageBackground
                                source={Images.enterquiz}
                                style={{ height: 278, width: 374, marginRight: 10 }}
                            >
                                <Box mt='15%' pl='37' pr='20%'>
                                    <Text fontSize='2xl' color='yellow.600' fontWeight='bold' pt='23%' pb='2' >{t('quiz')}</Text>
                                    <Text fontSize='md' color='white' lineHeight='22'>{t('paragraph')}</Text>
                                </Box>
                            </ImageBackground>

                            <ImageBackground
                                source={Images.enterquiz}
                                style={{ height: 278, width: 374, marginRight: 10 }}
                            >
                                <Box mt='15%' pl='37' pr='20%'>
                                    <Text fontSize='2xl' color='yellow.600' fontWeight='bold' pt='23%' pb='2'>{t('quiz')}</Text>
                                    <Text fontSize='md' color='white' lineHeight='22'>{t('paragraph')}</Text>
                                </Box>
                            </ImageBackground>
                        </ScrollView>
                    </Box>

                    {/* Botton_sec */}

                    <Box mt='10' mb='10' >


                        <Button p='4'>
                            {/* <Image  h='20' w='20'  source={{
                            uri: Images.starAnimation
                        }} /> */}
                            {t('view')}
                            {/* <Image  h='20' w='20'  source={{
                            uri: Images.starAnimation
                        }} /> */}
                        </Button>
                    </Box>

                    {/* Did you know? sec */}

                    <HStack justifyContent='space-between'>
                        <Box>
                            <Heading fontSize='2xl' bold mt='3' color='white'>{t('didyou')} <Text color="yellow.600" >{t('know')}</Text></Heading>
                            <Text fontSize="sm" color='gray.400' mt='2'>{t('learn')}</Text>
                        </Box>

                        <Button size="lg" variant="link" mt='-3'>
                            {t('viewmore')}
                        </Button>
                    </HStack>

                    <Box mt='10' mb='20'>
                        <ScrollView horizontal={true}>
                            <ImageBackground
                                source={Images.amitabh}
                                style={{ height: 217, width: 369, marginRight: 10, paddingLeft: 10, paddingBottom: 20 }}
                            >
                                <Box mt='10%' >
                                    <Text fontSize='md' color='white' fontWeight='600' pt='23%' pb='2'>{t('aboutAmitabh')}</Text>

                                    <Box style={{ flexDirection: 'row' }}>
                                        <Button size="lg" variant="link">
                                            {t('readMore')}
                                        </Button>
                                        <ArrowForwardIcon size="5" color="yellow.600" mt='3' />
                                    </Box>
                                </Box>
                            </ImageBackground>

                            <ImageBackground
                                source={Images.amitabh}
                                style={{ height: 217, width: 369, marginRight: 10, paddingLeft: 10, paddingBottom: 20 }}
                            >
                                <Box mt='10%' >
                                    <Text fontSize='md' color='white' fontWeight='600' pt='23%' pb='2'>{t('aboutAmitabh')}</Text>

                                    <Box style={{ flexDirection: 'row' }}>
                                        <Button size="lg" variant="link">
                                            {t('readMore')}
                                        </Button>
                                        <ArrowForwardIcon size="5" color="yellow.600" mt='3' />
                                    </Box>
                                </Box>
                            </ImageBackground>

                            <ImageBackground
                                source={Images.amitabh}
                                style={{ height: 217, width: 369, marginRight: 10, paddingLeft: 10, paddingBottom: 20 }}
                            >
                                <Box mt='10%' >
                                    <Text fontSize='md' color='white' fontWeight='600' pt='23%' pb='2'>{t('aboutAmitabh')}</Text>

                                    <Box style={{ flexDirection: 'row' }}>
                                        <Button size="lg" variant="link">
                                            {t('readMore')}
                                        </Button>
                                        <ArrowForwardIcon size="5" color="yellow.600" mt='3' />
                                    </Box>
                                </Box>
                            </ImageBackground>
                        </ScrollView>
                    </Box>

                </ImageBackground>
            </ScrollView>

        </Box>
    )
}
export default Home