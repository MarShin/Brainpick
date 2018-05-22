import * as React from 'react';
import { SafeAreaView } from 'react-native';

type Props = {
  backgroundColor: string,
  children: React.Node
};

const Background = ({ backgroundColor, children }: Props) => (
  <SafeAreaView style={{ flex: 1, backgroundColor }}>{children}</SafeAreaView>
);

export default Background;
