import React, { useState } from 'react'
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import Icons from './Icons'
import { useTranslation } from "react-i18next";


const HeaderBar = ({menu}) => {
    const { t } = useTranslation();


    return (<>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="#6200ee" />
        <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
            <HStack alignItems="center">
                {menu ? <IconButton icon={<Icons
                    name='menu'
                    font='Entypo'
                    color='green'
                    size={20}
                />} /> : <IconButton icon={<Icons
                    name='chevron-left'
                    font='Entypo'
                    color='green'
                    size={20}
                />} />}
                <Text color="white" fontSize="20" fontWeight="bold">
                    Home
                </Text>
            </HStack>
            <HStack>
                <IconButton icon={<Icons
                    name='magnifying-glass'
                    font='Entypo'
                    color='green'
                    size={20}
                />} />
                <IconButton icon={<Icons
                    name='user'
                    font='Entypo'
                    color='green'
                    size={20}
                />} />
            </HStack>
        </HStack>
    </>
    );
};

export default HeaderBar;