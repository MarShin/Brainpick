import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { TaskWidget } from '../Task';

import { connectAlert } from '../Alert';
import styles from './styles';

class TaskContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  };
  handleTaskSelect = () => {
    console.log('press task widget');
    this.props.navigation.navigate('CameraInstructions');
  };

  handleFail = () => {
    this.props.alertWithType('error', 'Sorry!', "You can't proceed now");
  };

  render() {
    return (
      <View style={styles.container}>
        <TaskWidget onPress={this.handleTaskSelect} />
        <TaskWidget onPress={this.handleFail} />
      </View>
    );
  }
}

export default connectAlert(TaskContainer);
