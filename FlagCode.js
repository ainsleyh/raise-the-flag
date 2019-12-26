import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

class FlagCode extends Component {
  static navigationOptions = {
    title: 'US Flag History and Etiquette',
    headerStyle: {
        backgroundColor: '#4169e1',
    },
    headerTintColor: '#FFFFFF',
  };

  render() {

    const flagRules = [
        "1. Display the flag only between sunrise and sunset on buildings and stationary staffs. The flag may be displayed for twenty-four hours if illuminated in darkness.",
        "2. Do not display the flag in inclement weather.",
        "3. Whether displaying the flag vertically or horizontally, make sure the canton of stars is visible on the upper left-hand side.",
        "4. Do not let the flag touch the ground.",
        "5. The flag should be hoisted briskly and lowered ceremoniously.",
        "6. Before flying a flag at half-staff, hoist to its peak for an instant before lowering it.",
        "7. When displayed against a wall with another flag, their staffs crossed, the American flag should be on the right of the other flag (on the viewer's left), with its staff on top of that of the other flag.",
        "8. When flags of states, cities, or localities are flown on the same halyard with the United States flag, the national flag should always be at the top. No other flag should be placed above, or if on the same level, to the flag's right.",
        "9. When flags of two or more nations are displayed, they should be flown from separate staffs of equal height. The flags should be of approximately equal size.",
        "10. When the flag is displayed from a staff projecting horizontally or at an angle, the canton should be placed at the peak of the staff.",
        "11. An unusable flag that is damaged and worn and can no longer be displayed should be destroyed in a dignified way by burning.",
        "12. When not on display, the flag should be respectfully folded into a triangle, symbolizing the tricorn hats worn by colonial soldiers in the Revolutionary War.",
    ];
    return (
    <View style={styles.page}>
     <ScrollView>
        <View style={styles.contentContainer}>
            <View>
                <Text style={styles.header}>Honoring the Flag Code</Text>
            </View>
            <View>
                <Text style={styles.content}>
                {"On June 22, 1942, Congress passed a joint resolution, later amended on December 22, 1942, that encompassed what has come to be known as the U.S. Flag Code."}
                </Text>
                <Text style={styles.content}>
                {"In the code, there are several sections on how to display the flag, how to maintain and handle the flag, and as well as general respect."}
                </Text>
            </View>
            <View>
                <Text style={styles.header}>{"12 Rules of the American Flag Etiquette"}</Text>
            </View>
            <View>
                {flagRules.map((rule, i) => {
                    return (
                    <Text style={styles.content} key={i}>
                      {rule}
                    </Text>
                    );
                })}
            </View>
        </View>
     </ScrollView>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#4169e1',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 2,
  },
  header: {
    fontSize: 24,
    color: 'crimson',
    paddingTop: 24,
    paddingBottom: 10,
    //fontFamily: 'sans-serif-condensed',
  },
  content: {
    fontSize: 18,
    paddingTop: 12,
    //fontFamily: 'sans-serif-condensed',
  },
});

export default FlagCode;