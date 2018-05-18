/* eslint-disable react/prefer-stateless-function */
// TODO: Settings page, this is just a mockup

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem title="Notifications" />
          <ListItem title="Profile" />
          <ListItem title="Password" />
        </List>
        <List>
          <ListItem title="Sign Out" rightIcon={{ name: 'cancel' }} />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
