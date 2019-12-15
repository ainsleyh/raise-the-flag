import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, RefreshControl, Text, View, StyleSheet, Image } from 'react-native';

import History from './History';
import Today from './Today';
import Loading from './Loading';

class Home extends Component {
  static navigationOptions = {
    title: 'RaiseTheFlag',
    headerStyle: {
        backgroundColor: '#4169e1',
    },
    headerTintColor: '#FFFFFF',
  };

  constructor(props) {
    super(props);
    this.state = { loading:true, data: null, error: false };
  }

  _refresh = () => {
    this.setState({ loading: true, data: null, error: false });
    const url = 'https://api.fatherstorm.com/flag.php?long=true';
    setTimeout(() => {
        fetch(url)
              .then(data => {return data.json();})
              .then(json => {
                this.setState({ loading: false, data: json });
              })
              .catch(error => {
                this.setState({ loading: false, error: true });
              });
    }, 2000);
  }

  componentDidMount() {
    this._refresh();
  }

  _getTodayStatus = mostRecentStatus => {
    return (
        <>
            <Today item={mostRecentStatus} />
        </>
    );
  }

  _getHistoryItems = data => {
    return (
        <History items={data.slice(0,20)} navigation={this.props.navigation} />
    );
  }

  render() {
    const { loading, data, error } = this.state;
    return (
    <SafeAreaView>
     <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={this._refresh} />
        }
        contentInsetAdjustmentBehavior="automatic">
      <View style={styles.page}>
        <Fragment>
            {error ? <Text>An unexpected error has occurred</Text> : null}
        </Fragment>
        <Fragment>
            {loading ? <Loading /> : null}
        </Fragment>
        <Fragment>
            {data != null ? this._getTodayStatus(data[0]) : null}
            {data != null ? this._getHistoryItems(data) : null}
        </Fragment>
      </View>
     </ScrollView>
     </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#d3d3d3',
  },
});

export default Home;