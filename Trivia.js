import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

import { generateTrivia } from './QuestionGenerator';

import Icon from 'react-native-vector-icons/FontAwesome';

class Trivia extends Component {
  static navigationOptions = {
    title: 'US Flag Trivia',
    headerStyle: {
        backgroundColor: '#4169e1',
    },
    headerTintColor: '#FFFFFF',
  };

  constructor(props) {
    super(props);
    this.state = { needsReset: false, trivia: generateTrivia(), selected: null };
  }

  _reset = () => {
    this.setState({ needsReset: false, trivia: generateTrivia(), selected: null });
  }

  _answerSelected = (answer) => {
    this.setState({ needsReset: true, selected: answer });
  }

  // fisher-yates shuffle
  _shuffle(array) {
      let counter = array.length;
      while (counter > 0) {
          let index = Math.floor(Math.random() * counter);
          counter--;
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }

      return array;
  }

  _getTriviaComponent() {
    const trivia = this.state.trivia;
    const shuffledAnswers = this._shuffle([...trivia.answers]);
    return (
      <View>
        <Text style={styles.question}>{trivia.question}</Text>
        {shuffledAnswers.map((answer, i) => (
            <View style={styles.answerContainer} key={i}>
              <TouchableHighlight onPress={() => this._answerSelected(answer)} underlayColor="#87ceeb">
                <Text style={styles.answer}>{answer}</Text>
              </TouchableHighlight>
            </View>
         ))
         }
      </View>);
  }

  _getResultComponent = () => {
    const isCorrect = this.state.selected == this.state.trivia.answers[this.state.trivia.answerIndex];
    return (
    <TouchableHighlight onPress={() => this._reset()} underlayColor="#87ceeb">
      <View>
        <Text style={styles.answer}>{isCorrect ? 'Correct!' : 'Wrong!'}</Text>
        <Text style={styles.question}>{this.state.trivia.followup}</Text>
            <View style={styles.arrowContainer}>
                <Icon name="arrow-right" size={25} style={styles.chevron} />
            </View>
      </View>
    </TouchableHighlight>);
  }

  render() {
    return (
    <View style={styles.outer}>
        <View style={styles.page}>
            { !this.state.needsReset ? this._getTriviaComponent() : null}
            { this.state.needsReset ? this._getResultComponent() : null}
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
  },
  page: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,
    borderColor: '#4169e1',
    borderWidth: 4,
  },
  arrowContainer: {
    alignItems: 'flex-end',
    alignSelf: 'stretch',
  },
  question: {
    fontSize: 36,
    fontWeight: '800',
    paddingTop: 12,
    paddingBottom: 12,
    //fontFamily: 'sans-serif-condensed',
    color: 'crimson',
  },
  answerContainer: {
    borderTopColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    alignSelf: 'stretch',
  },
  answer: {
    fontSize: 24,
    fontWeight: '800',
    padding: 8,
    //fontFamily: 'sans-serif-condensed',
  },
});

export default Trivia;