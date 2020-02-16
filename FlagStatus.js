import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

class FlagStatus extends Component {
  static navigationOptions = {
    title: 'Honor The Flag',
    headerStyle: {
        backgroundColor: '#4169e1',
        height: 40,
    },
    headerForceInset: { top: 'never', bottom: 'never' },
    headerTintColor: '#FFFFFF',
  };

  _getFlagIcon() {
    return (
    <View>
        <Image
            resizeMode={'contain'}
            style={{ width: 50, height: 50 }}
            source={{
             uri: 'https://static.thenounproject.com/png/167147-200.png'
            }}
        />
    </View>
        );
  }

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('item', {});
    return (
    <View style={styles.page}>
     <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            {this._getFlagIcon()}
            <Text style={styles.alertHeader}>
                HALF STAFF ALERT
            </Text>
          </View>
          <Text style={styles.title}>{data.short}</Text>
          <Text style={styles.date}>
            <Text>{"From " + data.start + " until " + data.end}</Text>
          </Text>
          {data.long.split('<br/>').map((line, i) => (
            <Text style={styles.line} key={i}>
                {line}
            </Text>
          ))}
        </View>
     </ScrollView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 2,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 4,
    borderColor: 'crimson',
    borderWidth: 1,
  },
  alertHeader: {
    fontSize: 24,
    padding: 6,
    //fontFamily: 'sans-serif-condensed',
  },
  date: {
    fontSize: 18,
    fontWeight: '800',
    paddingTop: 12,
    paddingBottom: 12,
    //fontFamily: 'sans-serif-condensed',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    paddingTop: 24,
    //fontFamily: 'sans-serif-condensed',
  },
  line: {

  },
});

export default FlagStatus;