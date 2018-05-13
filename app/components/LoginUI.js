import React, { Component } from 'react';
import { View, Text } from 'react-native';


const LoginUI = props => {
  render() {
    return (
      <View >
          <Text style={styles.welcome}> Brainpick app! </Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default LoginUI;
