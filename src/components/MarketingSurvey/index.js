import * as React from 'react';
import { View } from 'react-native';
import { Paragraph, Subheading } from 'react-native-paper';

import RadioButton from '../RadioButton';

type Props = {
  task: any
};

export default class MarketingSurvey extends React.Component<Props> {
  state = {
    response: null
  };

  render() {
    return (
      <View style={{ marginTop: 16 }}>
        <Subheading style={{ marginHorizontal: 16, marginTop: 16 }}>
          {this.props.task.payload.questions[0]}
        </Subheading>
        <View style={{ marginHorizontal: 16, marginTop: 16 }}>
          {this.props.task.payload.options.map(option => (
            <View key={option} style={{ flexDirection: 'row', margin: 6 }}>
              <RadioButton
                size={12}
                checked={this.state.response === option}
                onPress={() => this.setState(() => ({ response: option }))}
              />
              <Paragraph style={{ fontSize: 20, marginLeft: 10 }}>
                {option}
              </Paragraph>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
