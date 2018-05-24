// @flow
import * as React from 'react';
import { ScrollView } from 'react-native';
import { Paragraph } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';

import { SectionHeading } from '../../components/Headings';

const styles = EStyleSheet.create({
  instruction: { fontSize: 16, marginHorizontal: 16, marginBottom: 8 }
});

type Props = { instructions: any };

const Instructions = ({ instructions }: Props) => (
  <React.Fragment>
    <SectionHeading>Instructions</SectionHeading>
    <ScrollView style={{ flex: 1 }}>
      {instructions.map((p, i) => (
        <Paragraph key={i} style={styles.instruction}>
          {p}
        </Paragraph>
      ))}
    </ScrollView>
  </React.Fragment>
);

export default Instructions;
