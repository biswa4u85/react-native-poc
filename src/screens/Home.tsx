import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Button, Card, Text} from 'native-base';

export const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Welcome to Home</Text>
        <Button>Home</Button>
        <Button onPress={() => navigation.navigate('Category')}>
          Go to Details
        </Button>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4CAF50',
  },
  title: {
    color: '#FFFFFF',
  },
  button: {
    marginRight: 10,
  },
  card: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    lineHeight: 22,
  },
});
