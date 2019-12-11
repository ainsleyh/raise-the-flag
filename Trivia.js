import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

class Trivia extends Component {
  static navigationOptions = {
    title: 'US Flag Trivia',
    headerStyle: {
        backgroundColor: '#4169e1',
    },
    headerTintColor: '#FFFFFF',
  };

  render() {
    return (
    <View style={styles.page}>
        <Text>trivia here</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default Trivia;