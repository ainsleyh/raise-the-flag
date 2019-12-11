import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

class FlagCode extends Component {
  static navigationOptions = {
    title: 'US Flag Etiquette',
    headerStyle: {
        backgroundColor: '#4169e1',
    },
    headerTintColor: '#FFFFFF',
  };

  render() {
    return (
    <View style={styles.page}>
     <ScrollView>
        <View style={styles.contentContainer}>
            <Text>Etiquette here</Text>
        </View>
     </ScrollView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default FlagCode;