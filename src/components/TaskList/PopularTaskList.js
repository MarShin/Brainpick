// @flow
import * as React from 'react';
import { FlatList } from 'react-native';

import PopularTaskItem from './PopularTaskItem';
import styles from './styles';

type Props = {
  popularTasks: Array<string>
};

const PopularTaskList = ({ popularTasks }: Props) => (
  <FlatList
    data={popularTasks}
    renderItem={({ item }) => <PopularTaskItem>{item}</PopularTaskItem>}
    keyExtractor={(item, index) => item + index}
    style={styles.popularTaskList}
    showsHorizontalScrollIndicator={false}
    horizontal
  />
);

export default PopularTaskList;
