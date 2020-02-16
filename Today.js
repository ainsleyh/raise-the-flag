import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Today extends Component {

  _getFlagImg() {
    return (
    <View>
        <Image
            resizeMode={'cover'}
            style={{ width: 75, height: 50 }}
            source={{
             uri: 'data:image/png;base64,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'
            }}
        />
    </View>
        );
  }

  _getStatus(data) {
    const endDate = new Date(data.end);
    const todaysDate = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate());

    const isHalfStaff = endDate >= todaysDate ? true : false;

    if (isHalfStaff) {
        const lines = data.long.split('<br/>');
        return (
            <>
                <Text style={styles.alertHeader}>
                    HALF STAFF ALERT
                </Text>
                <Text style={styles.halfStaffDuration}>
                    <Text>{"From " + data.start + " until " + data.end}</Text>
                </Text>
                <Text style={styles.halfStaffHeader}>{data.short}</Text>
                {lines.map(line => (
                    <Text style={styles.sectionDescription}>
                        {line}
                    </Text>
                 ))}
            </>
         );
    }

    return (
        <View>
            <Text style={styles.fullStaffHeader}>
                The status of the American Flag today is
            </Text>
            <Text style={styles.fullStaff}>
                FULL STAFF.
            </Text>
        </View>
        );
  }

  render() {
    const todaysDate = new Date(Date.now());
    return (
        <View style={styles.cardContainer}>
            <View style={styles.flagContainer}>
                {this._getFlagImg()}
                <Text style={styles.date}>
                  {todaysDate.toDateString()}
                </Text>
            </View>
            {this._getStatus(this.props.item)}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderRadius: 2,
    padding: 15,
    marginLeft: -20,
    marginRight: -20,
    backgroundColor: '#4169e1',
  },
  date: {
    color: 'white',
    fontSize: 24,
    paddingLeft: 20,
  },
  fullStaffHeader: {
    fontSize: 24,
    fontWeight: '800',
    padding: 12,
    //fontFamily: 'sans-serif-condensed',
  },
  fullStaff: {
    fontSize: 24,
    fontWeight: '800',
    padding: 12,
    //fontFamily: 'sans-serif-condensed',
    color: 'crimson',
  },
  alertHeader: {
    fontSize: 24,
    fontWeight: '800',
    padding: 12,
    //fontFamily: 'sans-serif-condensed',
    color: 'crimson',
  },
  halfStaffDuration: {
    fontSize: 20,
    //fontFamily: 'sans-serif-condensed',
  },
  halfStaffHeader: {
    fontSize: 20,
    fontWeight: '800',
    paddingTop: 12,
    paddingBottom: 12,
    //fontFamily: 'sans-serif-condensed',
  },
  sectionDescription: {
  },
});

export default Today;