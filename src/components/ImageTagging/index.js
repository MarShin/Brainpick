import * as React from 'react';
import { View, Image } from 'react-native';
import { Paragraph } from 'react-native-paper';

import RadioButton from '../RadioButton';

type Props = {
  task: any
};

export default class ImageTagging extends React.Component<Props> {
  state = {
    response: null
  };

  render() {
    return (
      <View style={{ marginTop: 16 }}>
        <Image
          style={{ height: 320 }}
          resizeMode="cover"
          source={{ uri: this.props.task.payload.images[0] }}
        />
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
