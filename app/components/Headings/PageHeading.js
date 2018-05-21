// @flow
import * as React from 'react';
import { Text } from 'react-native';

import styles from './styles';

type Props = { children: React.Node };

const PageHeading = ({ children }: Props) => <Text style={styles.page}>{children}</Text>;

export default PageHeading;
