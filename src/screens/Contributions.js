// @flow
import * as React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { Card, CardContent, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { compose } from 'recompose';

import FinishedTaskItem from '../components/TaskList/FinishedTaskItem';
import Background from '../components/Background';
import { PageHeading, SectionHeading } from '../components/Headings';

const Contributions = ({ profile, finishedTasks }) => (
  <Background backgroundColor="#F5F8FA">
    <StatusBar backgroundColor="#F5F8FA" translucent />
    <PageHeading>Contributions</PageHeading>
    <SectionHeading>Summary</SectionHeading>
    <View style={{ paddingHorizontal: 12, flexDirection: 'row' }}>
      <Card style={{ flex: 1, backgroundColor: '#50BBFF' }}>
        <CardContent>
          <Paragraph style={{ color: '#FFF', fontSize: 16 }}>
            Since joining, you have earned
          </Paragraph>
          <Text style={{ color: '#FFD600', fontSize: 42 }}>
            <Text style={{ fontSize: 32 }}>$</Text>
            {profile.balance ? profile.balance.toFixed(1) : 0}
          </Text>
        </CardContent>
      </Card>
      <Card style={{ flex: 1, backgroundColor: '#40CBC3' }}>
        <CardContent>
          <Paragraph style={{ color: '#FFF', fontSize: 16 }}>
            You have helped
          </Paragraph>
          <Text style={{ color: '#FFF600', fontSize: 42 }}>
            {profile.history ? profile.history.length : 0}
          </Text>
          <Paragraph style={{ color: '#FFF', fontSize: 16 }}>
            research projects
          </Paragraph>
        </CardContent>
      </Card>
    </View>
    <SectionHeading>Breakdown</SectionHeading>
    {finishedTasks.map(t => <FinishedTaskItem key={t.id} task={t} />)}
  </Background>
);

export default compose(
  withFirebase,
  connect(({ firebase: { profile: p }, firestore: { ordered } }) => ({
    profile: p,
    finishedTasks: ordered.tasks
      ? ordered.tasks.filter(t => p.history && p.history.includes(t.id))
      : []
  }))
)(Contributions);
