import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content, Container, Header, Footer, Root } from 'native-base';
import ContactInfo from './components/contact-info';

export default class App extends React.Component {
  async componentWillMount () {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render () {
    return (
      <Root>
        <Header />
        <ContactInfo />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
