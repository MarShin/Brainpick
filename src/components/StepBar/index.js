// @flow
import * as React from 'react';
import { Paper, Paragraph, Button } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { withFirebase } from 'react-redux-firebase';

import {
  prevStepInCurrentTask,
  nextStepInCurrentTask,
  finishCurrentTask
} from '../../reducers/actions';
import isIPhoneXPortrait from '../../utils/isIPhoneXPortrait';

const styles = EStyleSheet.create({
  bottomBar: {
    height: isIPhoneXPortrait ? 84 : 56,
    padding: 6,
    paddingBottom: isIPhoneXPortrait ? 34 : 6,
    flexDirection: 'row',
    elevation: 8
  },
  stepDescription: {
    flex: 1,
    fontSize: 20,
    lineHeight: 20,
    padding: 10
  }
});

type Props = {
  firebase: any,
  profile: any,
  task: any,
  currentTask: any,
  navigation: any,
  finishCurrentTask: () => void,
  prevStepInCurrentTask: () => void,
  nextStepInCurrentTask: () => void
};

class StepBar extends React.Component<Props> {
  onPressBack = () => {
    if (this.props.currentTask.step === 0) {
      this.props.navigation.goBack();
    } else {
      this.props.prevStepInCurrentTask();
    }
  };

  onPressNext = () => {
    if (this.props.currentTask.step >= 2) {
      this.props.firebase.updateProfile({
        balance: this.props.profile.balance
          ? this.props.profile.balance + this.props.task.rewardPerItem
          : this.props.task.rewardPerItem,
        history: this.props.profile.history
          ? [...this.props.profile.history, this.props.task.id]
          : [this.props.task.id]
      });
      this.props.finishCurrentTask();
      this.props.navigation.navigate('HomeNavigator');
    } else {
      this.props.nextStepInCurrentTask();
    }
  };

  render() {
    const { currentTask } = this.props;
    return (
      <Paper style={styles.bottomBar}>
        <Paragraph style={styles.stepDescription}>
          Step {currentTask.step + 1} of 3
        </Paragraph>
        <Button onPress={this.onPressBack} color="#929292" raised dark>
          {currentTask.step === 0 ? 'Cancel' : 'Back'}
        </Button>
        <Button onPress={this.onPressNext} primary raised dark>
          {currentTask.step === 2 ? 'FINISH' : 'Next'}
        </Button>
      </Paper>
    );
  }
}

export default compose(
  withNavigation,
  withFirebase,
  connect(
    ({ currentTask, firebase: { profile } }, { navigation }) => ({
      currentTask,
      profile,
      navigation
    }),
    dispatch => ({
      finishCurrentTask: () => dispatch(finishCurrentTask()),
      prevStepInCurrentTask: () => dispatch(prevStepInCurrentTask()),
      nextStepInCurrentTask: () => dispatch(nextStepInCurrentTask())
    })
  )
)(StepBar);
