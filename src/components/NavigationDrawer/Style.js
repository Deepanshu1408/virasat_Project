import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    height: 180,
    backgroundColor: '#ffbc38',
    paddingStart: 20,
    justifyContent: 'space-around',
  },

  userName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },
  menu: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 19,
  },
});

export default Styles;
