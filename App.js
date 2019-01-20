import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content, Container, Header, Footer } from 'native-base';

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header></Header>
        <Content style={{alignSelf: 'center'}}>
            <Text>This is the beginning...</Text>
        </Content>
        <Footer></Footer>
      </Container>
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
