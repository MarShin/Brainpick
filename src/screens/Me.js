// TODO: added firebase auth fetch user to dmeo only, please add to User redux store

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

import { me } from '../config/data';

class Me extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  constructor() {
    super();
    this.state = { currentUser: null };
  }
  componentDidMount() {
    const { currentUser } = firebase.auth();

    // temp for now
    this.setState({ currentUser });
  }

  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    const { currentUser } = this.state;
    console.log('current user ', currentUser);

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large }}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem title="Username" rightTitle={this.props.login.username} hideChevron />
          <ListItem title="Email" rightTitle={currentUser && currentUser.email} hideChevron />
          <ListItem title="Phone" rightTitle={this.props.phone} hideChevron />
        </List>

        <List>
          <ListItem title="Birthday" rightTitle={this.props.dob} hideChevron />
          <ListItem title="City" rightTitle={this.props.location.city} hideChevron />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
