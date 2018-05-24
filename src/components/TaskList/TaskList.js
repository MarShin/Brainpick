// @flow
import * as React from 'react';
import { SectionList } from 'react-native';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'recompose';

import { SectionHeading } from '../Headings';
import PopularTaskList from './PopularTaskList';
import LatestTaskItem from './LatestTaskItem';
import styles from './styles';

type SectionInfo = { section: { title: string } };

const renderSectionHeader = (sectionInfo: SectionInfo) => (
  <SectionHeading>{sectionInfo.section.title}</SectionHeading>
);

const popularTasks = ['item1', 'item2'];
const renderPopular = (props: { item: { popularTasks: Array<string> } }) => (
  <PopularTaskList popularTasks={props.item.popularTasks} />
);

const renderLatest = ({ item }: { item: { name: string } }) => (
  <LatestTaskItem task={item} />
);

const TaskList = ({ latestTasks }) => {
  if (!isLoaded(latestTasks)) return null;
  return (
    <SectionList
      renderSectionHeader={renderSectionHeader}
      sections={[
        {
          title: 'Popular',
          data: [{ popularTasks }],
          renderItem: renderPopular
        },
        { title: 'Latest', data: latestTasks, renderItem: renderLatest }
      ]}
      keyExtractor={(item, index) => item + index}
      style={styles.list}
      stickySectionHeadersEnabled={false}
    />
  );
};

export default compose(
  firestoreConnect(['tasks']),
  connect(({ firestore: { ordered } }) => ({ latestTasks: ordered.tasks }))
)(TaskList);
