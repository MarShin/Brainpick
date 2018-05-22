import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connectAlert } from '../Alert';
import { TaskWidget } from '../Task';
import styles from './styles';

class TaskContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  };

  constructor() {
    super();
    // this.ref = firebase.firestore().collection('tasks');

    this.unsubscribe = null;
    this.state = {
      loading: true,
      tasks: []
    };
  }

  componentDidMount() {
    // this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  // unsubscribe if usgin update mode
  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  // onCollectionUpdate = (querySnapshot) => {
  //   const tasks = [];
  //   querySnapshot.forEach((doc) => {
  //     const { name, complete } = doc.data();
  //     tasks.push({
  //       key: doc.id,
  //       doc, // DocumentSnapshot
  //       name,
  //       complete
  //     });
  //   });

  //   this.setState({
  //     tasks,
  //     loading: false
  //   });
  // };

  handleTaskSelect = () => {
    console.log('press task widget');
    this.props.navigation.navigate('CameraInstructions');
  };

  handleFail = () => {
    this.props.alertWithType('error', 'Sorry!', "You can't proceed now");
  };

  render() {
    console.log('firestore task collection', this.state.tasks);
    return (
      <View style={styles.container}>
        <TaskWidget onPress={this.handleTaskSelect} />
        <TaskWidget onPress={this.handleFail} />
      </View>
    );
  }
}

export default connectAlert(TaskContainer);
