import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

export default class Loading extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user: ', user);
      this.props.navigation.navigate(user ? 'AppStack' : 'SignUp');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
