import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

import { generateTrivia } from './QuestionGenerator';

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

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
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
        {shuffledAnswers.map(answer => (
          <TouchableHighlight onPress={() => this._answerSelected(answer)} underlayColor="#87ceeb">
            <View>
                <Text style={styles.answer}>{answer}</Text>
            </View>
          </TouchableHighlight>
         ))
         }
      </View>);
  }

  _getResultComponent = () => {
    console.log(this.state.selected);
    console.log(this.state.trivia.answers[this.state.trivia.answerIndex]);
    const isCorrect = this.state.selected == this.state.trivia.answers[this.state.trivia.answerIndex];
    return (
      <View>
        <Text style={styles.result}>{isCorrect ? 'Correct!' : 'Wrong!'}</Text>
        <Text style={styles.question}>{this.state.trivia.followup}</Text>
        <TouchableHighlight onPress={() => this._reset()} underlayColor="#87ceeb">
            <View>
                <Text style={styles.answer}>Reset</Text>
            </View>
        </TouchableHighlight>
      </View>);
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
    backgroundColor: '#4169e1',
    justifyContent: 'center',
  },
  page: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,

  },
  question: {
    fontSize: 36,
    fontWeight: '800',
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: 'sans-serif-condensed',
    color: 'crimson',
  },
  answer: {
    fontSize: 24,
    fontWeight: '800',
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: 'sans-serif-condensed',
  },
});

export default Trivia;