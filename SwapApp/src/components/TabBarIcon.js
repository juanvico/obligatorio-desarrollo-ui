import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import homeIcon from '_assets/ic_home/ic_home.png';
import settingsIcon from '_assets/ic_settings/ic_settings.png';
import inboxIcon from '_assets/ic_inbox/ic_inbox.png';
import addIcon from '_assets/ic_add/ic_add.png';
import { NAVIGATION } from '_constants';

const tabIcon = {
  [NAVIGATION.home]: homeIcon,
  [NAVIGATION.profile]: settingsIcon,
  [NAVIGATION.inbox]: inboxIcon,
  [NAVIGATION.createItem]: addIcon,
};

function TabBarIcon({ name, color }) {
  return <Image source={tabIcon[name]} style={{ tintColor: color }} />;
}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default TabBarIcon;
