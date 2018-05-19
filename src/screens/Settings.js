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
          <ListItem title="Notifications" hideChevron />
          <ListItem title="Profile" hideChevron />
          <ListItem title="Password" hideChevron />
        </List>
        <List>
          <ListItem title="Sign Out" rightIcon={{ name: 'cancel' }} hideChevron />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
