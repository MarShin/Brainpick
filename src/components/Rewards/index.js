// @flow
import * as React from 'react';
import { View, Text } from 'react-native';
import { Subheading } from 'react-native-paper';

import { SectionHeading } from '../../components/Headings';

const Rewards = ({ task }) => (
  <React.Fragment>
    <SectionHeading>Rewards</SectionHeading>
    <View style={{ marginHorizontal: 16 }}>
      <Subheading style={{ fontSize: 16 }}>Congratulations!</Subheading>
      <Subheading style={{ fontSize: 24 }}>You have been rewarded</Subheading>
      <Text style={{ fontSize: 64, color: '#F5A623', marginBottom: 16 }}>
        ${task.rewardPerItem.toFixed(1)}
      </Text>
      <Subheading style={{ fontSize: 16 }}>Sponsored by</Subheading>
      <Text style={{ fontSize: 32 }}>{task.issuer}</Text>
    </View>
  </React.Fragment>
);

export default Rewards;
