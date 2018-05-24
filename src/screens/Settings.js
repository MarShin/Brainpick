// @flow
import * as React from 'react';
import { StatusBar } from 'react-native';
import { ListSection, ListItem } from 'react-native-paper';
import { withFirebase } from 'react-redux-firebase';

import {
  createMaterialIcon,
  createMaterialCommunityIcon
} from '../utils/createIcon';
import Background from '../components/Background';
import { PageHeading } from '../components/Headings';

type Props = { firebase: any };

const Settings = ({ firebase }: Props) => (
  <Background backgroundColor="#FAFAFA">
    <StatusBar backgroundColor="#FAFAFA" translucent />
    <PageHeading>Settings</PageHeading>
    <ListSection style={{ backgroundColor: '#FFFFFF', marginTop: 16 }}>
      <ListItem
        title="Profile"
        icon={createMaterialIcon('account-circle', '#009FFF')}
      />
      <ListItem
        title="Payment"
        icon={createMaterialIcon('payment', '#F5A623')}
      />
      <ListItem
        title="Notifications"
        icon={createMaterialIcon('notifications', '#7ED321')}
      />
      <ListItem
        title="Password"
        icon={createMaterialIcon('vpn-key', '#894daa')}
      />
    </ListSection>
    <ListSection style={{ backgroundColor: '#FFFFFF', marginTop: 16 }}>
      <ListItem
        title="Sign Out"
        icon={createMaterialCommunityIcon('logout', '#F5A623')}
        onPress={firebase.logout}
      />
    </ListSection>
  </Background>
);

export default withFirebase(Settings);
