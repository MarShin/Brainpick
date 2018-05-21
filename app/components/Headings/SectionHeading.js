// @flow
import * as React from 'react';
import { Text } from 'react-native';

import styles from './styles';

type Props = { children: React.Node };

const SectionHeading = ({ children }: Props) => <Text style={styles.section}>{children}</Text>;

export default SectionHeading;
