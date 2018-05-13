// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { TaskWidget } from '../Task';

import styles from './styles';

class TaskContainer extends Component {
    handleTaskSelect = () => {
        console.log('press task widget');
        this.props.navigation.navigate('CameraInstructions');
    };

    render() {
        return (
            <View style={styles.container}>
                <TaskWidget onPress={this.handleTaskSelect} />
                <TaskWidget onPress={this.handleTaskSelect} />
                <TaskWidget onPress={this.handleTaskSelect} />
            </View>
        );
    }
}

export default TaskContainer;
