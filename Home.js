import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import History from './History';
import Today from './Today';
import Loading from './Loading';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { loading:true };
  }

  componentDidMount() {
    const url = 'http://api.fatherstorm.com/flag.php?long=true';
    fetch(url)
          .then(data => {return data.json();})
          .then(json => {
            setTimeout(() => {
                console.log('success');
                            this.setState({ loading: false, data: json });
             }, 2000);
          })
          .catch(error => {
            console.log('fail');
            console.log(error);
            this.setState({ loading: false, error: true });
          });
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
        <>
            <Text>Recent Updates</Text>
            <History items={data.slice(0,10)} />
        </>
    );
  }

  // TODO
  // HTML to TEXT
  // UX
  // Navigation to more page
  // Info button on Flag

  render() {
    const { loading, data, error } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
    );
  }
}

const styles = StyleSheet.create({

});

export default Home;