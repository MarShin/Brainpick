import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "react-native-firebase";

import { connectAlert } from "../Alert";
import { TaskWidget } from "../Task";
import styles from "./styles";

class TaskContainer extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  };

  constructor() {
    super();
    this.ref = firebase.firestore().collection("tasks");
    // .doc("G4C5J36YxaXdnvVf6Lq7");

    this.unsubscribe = null;
    this.state = {
      textInput: "",
      loading: true,
      tasks: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const tasks = [];
    querySnapshot.forEach(doc => {
      const { name, complete } = doc.data();
      tasks.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        complete
      });
    });

    console.log("tasks array: ", tasks);
    this.setState({
      tasks,
      loading: false
    });
  };

  componentDidMount() {
    console.log("reading firestore now...");
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  addTask = () => {
    //no write permission Promise rejection
    this.ref.add({
      name: "dummy_task",
      complete: false
    });
  };

  handleTaskSelect = () => {
    console.log("press task widget");
    this.props.navigation.navigate("CameraInstructions");
  };

  handleFail = () => {
    this.props.alertWithType("error", "Sorry!", "You can't proceed now");
  };

  render() {
    console.log("firestore task collection", this.state.tasks);
    return (
      <View style={styles.container}>
        <TaskWidget onPress={this.handleTaskSelect} />
        <TaskWidget onPress={this.handleFail} />
      </View>
    );
  }
}

export default connectAlert(TaskContainer);
