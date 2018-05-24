import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connectAlert } from '../Alert';

import styles from './styles';

const title = 'Photograph Common Objects';
const instructions =
  'you wil blablabla blablabla sdfsdf blablabla blablabla blablabla blablabla blablabla';

class Steps extends Component {
  handlePressStart = () => {
    this.props.navigation.goBack(null);
    // this.props.alertWithType('error', 'Sorry!', "You can't proceed now");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{title}</Text>
          <Image
            style={styles.image}
            source={require('./images/good_bad_example.png')}
            resizeMode="contain"
          />
          <Text style={styles.instructions}>{instructions}</Text>
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title="Understand!"
            onPress={this.handlePressStart}
          />
        </ScrollView>
      </View>
    );
  }
}
export default connectAlert(Steps);
