// @flow
import * as React from 'react';
import { StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'recompose';

import Background from '../components/Background';
import Instructions from '../components/Instructions';
import MarketingSurvey from '../components/MarketingSurvey';
import ImageTagging from '../components/ImageTagging';
import Rewards from '../components/Rewards';
import { PageHeading } from '../components/Headings';
import StepBar from '../components/StepBar';

type Props = { currentTask: any, task: any };

class Task extends React.Component<Props> {
  renderSubpage = () => {
    const { currentTask, task } = this.props;
    switch (currentTask.step) {
      case 2:
        return <Rewards task={task} />;
      case 1:
        switch (task.type) {
          case 'IMAGE_TAGGING':
            return <ImageTagging task={task} />;
          case 'MARKETING_SURVEY':
            return <MarketingSurvey task={task} />;
          default:
            return null;
        }
      default:
        return <Instructions instructions={task.instructions} />;
    }
  };

  render() {
    const { task } = this.props;
    return isLoaded(task) ? (
      <React.Fragment>
        <Background backgroundColor="#FAFAFA">
          <StatusBar backgroundColor="#FAFAFA" translucent />
          <PageHeading>{task.name}</PageHeading>
          {this.renderSubpage()}
        </Background>
        <StepBar task={task} />
      </React.Fragment>
    ) : null;
  }
}

export default compose(
  withNavigation,
  firestoreConnect(({ navigation }) => [
    { collection: 'tasks', doc: navigation.getParam('id', '') }
  ]),
  connect((
    {
      currentTask,
      firestore: {
        data: { tasks }
      }
    },
    { navigation }
  ) => ({
    currentTask,
    task: tasks && {
      ...tasks[navigation.getParam('id', '')],
      id: navigation.getParam('id', '')
    },
    navigation
  }))
)(Task);
