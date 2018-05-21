// @flow
import * as React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { Card, CardContent, Title, Paragraph } from 'react-native-paper';

import Background from '../components/Background';
import { PageHeading, SectionHeading } from '../components/Headings';

const Contributions = () => (
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
            <Text style={{ fontSize: 32 }}>$</Text>160.0
          </Text>
        </CardContent>
      </Card>
      <Card style={{ flex: 1, backgroundColor: '#40CBC3' }}>
        <CardContent>
          <Paragraph style={{ color: '#FFF', fontSize: 16 }}>You have helped</Paragraph>
          <Text style={{ color: '#FFF600', fontSize: 42 }}>1,234</Text>
          <Paragraph style={{ color: '#FFF', fontSize: 16 }}>research projects</Paragraph>
        </CardContent>
      </Card>
    </View>
    <Card style={{ marginHorizontal: 16 }}>
      <CardContent>
        <Paragraph>This year, you’ve just spent</Paragraph>
      </CardContent>
    </Card>
    <SectionHeading>Breakdown</SectionHeading>
  </Background>
);

export default Contributions;
