// @flow
import * as React from 'react';
import { View } from 'react-native';
import {
  Card,
  CardContent,
  CardCover,
  Title,
  Paragraph
} from 'react-native-paper';

type Props = { children: React.Node };

const LatestTaskItem = ({ children }: Props) => (
  <Card style={{ marginHorizontal: 16, marginBottom: 8 }}>
    <View style={{ flexDirection: 'row' }}>
      <CardContent style={{ flex: 1 }}>
        <Title>{children}</Title>
        <Paragraph>Card content</Paragraph>
      </CardContent>
    </View>
  </Card>
);

export default LatestTaskItem;
