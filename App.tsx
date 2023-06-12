/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { NativeBaseProvider, extendTheme, HStack, Center } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { HomeScreen, AboutScreen } from '@screens';
import Navigation from './src/Navigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      {/* <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
       
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <HStack space={3} justifyContent="center">
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
            <GooglePlacesAutocomplete
              placeholder='Search'
              enablePoweredByContainer={false}
              onPress={(data, details = null) => {
                console.log(data, details);
              }}
              query={{
                key: 'AIzaSyDRNcW3LyDPSMdoIiPvKouIC-dNZVl4768',
                language: 'en',
              }}
            />
            <Center h="40" w="20" bg="primary.700" rounded="md" shadow={3} />
          </HStack>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView> */}
      <Navigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
