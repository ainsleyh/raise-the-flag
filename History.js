import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class History extends Component {
  render() {
    /*  <Text style={styles.sectionDescription} numberOfLines={4}>
                       {item.long}
                       </Text> */
    const recentUpdates = this.props.items;
    return (
    <Fragment>
        {recentUpdates.map(item => (
            <View style={{borderTopColor: 'black', borderTopWidth: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                    <Text>{item.start + " - " + item.end}</Text>
                </View>
                <Text style={styles.sectionTitle}>{item.short}</Text>
            </View>
         ))
         }
    </Fragment>
    );
  }
}

const styles = StyleSheet.create({
});

export default History;