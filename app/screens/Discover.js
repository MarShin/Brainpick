// @flow
import * as React from 'react';
import { StatusBar } from 'react-native';

import Background from '../components/Background/';
import DiscoverHeader from '../components/DiscoverHeader';
import TaskList from '../components/TaskList';

// type Props = { navigation: any };

const Discover = () => (
  <Background backgroundColor="#F5F8FA">
    <StatusBar backgroundColor="#F5F8FA" translucent />
    <DiscoverHeader />
    <TaskList />
  </Background>
);

export default Discover;
