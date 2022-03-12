import React, { useState } from 'react'
import { ImageBackground, ScrollView, Dimensions } from "react-native";
import styles from '../common/FormStyles'
import Images from '../common/Images'
import { useTranslation } from "react-i18next";
import Config from '../common/Config'
import { Box, Text, Image, Center, Button, ArrowForwardIcon, Heading, HStack } from "native-base";


const Exemple = () => {
    const { t } = useTranslation();
    const [fastTab, setFastTab] = useState('ongoing')

// const name =(x)=>{
//     setA(x)
// }




    // console.log(number)

    return (
        <Box style={styles.container} pb='40'>

            <ScrollView>


                <ImageBackground
                    source={Images.bodyBg}
                    style={{ paddingHorizontal: 10 }}
                >

                    {/* <Button onPress={() => (changeNumber(20))}>Click Me</Button>
                    <Button onPress={() => (changeNumber(30))}>Click Me</Button>
                    <Button onPress={() => (changeNumber(40))}>Click Me</Button> */}

                    {/* <Text fontSize="2xl" color='white' >{t('heading')} </Text> */}
                    



                    <Box justifyContent="space-between" flexDirection="row">
                        <Button onPress={() => (setFastTab('ongoing'))}>Ongoing</Button>
                        <Button onPress={() => (setFastTab('upcoming'))}>Upcoming</Button>
                        <Button onPress={() => (setFastTab('completed'))}>Completed</Button>
                    </Box>

                    {fastTab == 'ongoing' && (<Box><Text fontSize="2xl" color='white' >1</Text></Box>)}
                    {fastTab == 'upcoming' && ( <Box><Text fontSize="2xl" color='white' >2</Text></Box>)}
                    {fastTab == 'completed' && ( <Box><Text fontSize="2xl" color='white' >3</Text></Box>)}

                </ImageBackground>
            </ScrollView>

        </Box>
    )
}
export default Exemple