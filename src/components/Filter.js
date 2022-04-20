import React, { useState } from 'react'
import { Heading, View, Box, Text, Center, Button, Input, Image, HStack, SearchIcon, Actionsheet, useDisclose, Checkbox } from "native-base";
import { useTranslation } from "react-i18next";


const Filter = (props) => {
  const { t } = useTranslation();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();


  return (  
    <HStack space={3} justifyContent="center" pt="20">
      <Box mr="5" ml="1">
        <Input borderColor="#172347" InputLeftElement={<SearchIcon size="4" color="white" ml="2 " />} placeholder="Search" bgColor="black" w="115%" />
      </Box>
      <Box mr="1" ml="4" >
        <Button borderColor="#172347" variant="outline" onPress={onOpen} leftIcon={<SearchIcon size="4" color="white" ml="2" mr="2" />}>
          {t('fillter')}
        </Button>
        <Center>

          <Actionsheet isOpen={isOpen} onClose={onClose} size="full" color="#070B16">
            <Actionsheet.Content backgroundColor="#070B16">
              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text fontSize="16" color="white" _dark={{
                  color: "gray.300"
                }}>
                  {t('albums')}
                </Text>
              </Box>

              <HStack w='90%'mr="10" >
                <Actionsheet.Item startIcon={<SearchIcon size="4" color="white" ml="2" mr="2" />}>
                  {t('filmstars')}
                  
                </Actionsheet.Item>

                <Box mt="5"><Checkbox value="test" ></Checkbox></Box>
              </HStack>


              <Actionsheet.Item startIcon={<SearchIcon size="4" color="white" ml="2" mr="2" />}>
                {t('musicians')}
              </Actionsheet.Item>
              <Actionsheet.Item startIcon={<SearchIcon size="4" color="white" ml="2" mr="2" />}>
                {t('cricketers')}
              </Actionsheet.Item>
              <Actionsheet.Item startIcon={<SearchIcon size="4" color="white" ml="2" mr="2" />}>
                {t('sitcomStars')}
              </Actionsheet.Item>
              <Actionsheet.Item p={3} startIcon={<SearchIcon size="4" color="white" ml="2" mr="2" />}>
                {t('showStars')}
              </Actionsheet.Item>
              <Actionsheet.Item p={3} startIcon={<SearchIcon size="4" color="white" ml="2" mr="2" />}>
                {t('Socialmediainfluences')}
              </Actionsheet.Item>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>
      </Box>
    </HStack>
  );
};

export default Filter;