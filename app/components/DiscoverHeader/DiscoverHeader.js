// @flow
import * as React from 'react';
import { View } from 'react-native';

import { PageHeading } from '../Headings';
import styles from './styles';

const DiscoverHeader = () => (
  <View style={styles.container}>
    <PageHeading>Discover</PageHeading>
  </View>
);

export default DiscoverHeader;
