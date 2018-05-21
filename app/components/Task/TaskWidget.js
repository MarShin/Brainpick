import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const title = 'Photograph Common Objects';
const description =
  'Choose an object from the list and take a high quality photo of it - but only photos meeting our standards will be paid out!';
const price = 'Up to $0.5 per approved photo';

type Props = {
  onPress: () => void
};

class ClearButton extends React.Component<Props> {
  handleSmth = () => {
    console.log('haha');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ClearButton;
