// @flow
import * as React from 'react';
import { SectionList, FlatList } from 'react-native';

import { SectionHeading } from '../Headings';
import PopularTaskItem from './PopularTaskItem';
import LatestTaskItem from './LatestTaskItem';
import styles from './styles';

type SectionInfo = {
  section: { title: string }
};

const renderSectionHeader = (sectionInfo: SectionInfo) => (
  <SectionHeading>{sectionInfo.section.title}</SectionHeading>
);

const popularTasks = ['item1', 'item2'];
const renderPopular = (props: { item: { popularTasks: Array<string> } }) => (
  <FlatList
    data={props.item.popularTasks}
    renderItem={({ item }) => <PopularTaskItem>{item}</PopularTaskItem>}
    keyExtractor={(item, index) => item + index}
    style={styles.popularTaskList}
    showsHorizontalScrollIndicator={false}
    horizontal
  />
);

const latestTasks = ['item3', 'item4'];
const renderLatest = ({ item }: { item: string }) => <LatestTaskItem>{item}</LatestTaskItem>;

const TaskList = () => (
  <SectionList
    renderSectionHeader={renderSectionHeader}
    sections={[
      { title: 'Popular', data: [{ popularTasks }], renderItem: renderPopular },
      { title: 'Latest', data: latestTasks, renderItem: renderLatest }
    ]}
    keyExtractor={(item, index) => item + index}
    style={styles.list}
    stickySectionHeadersEnabled={false}
  />
);

export default TaskList;
