import React from 'react';
import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  main: {
    flex: 1,
  },
  holder: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    backgroundColor: '#FFFFFF',
  },

  heading: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },

  button: {
    backgroundColor: '#2d75eb',
    alignItems: 'center',
    elevation: 3,
    width: 150,
    height: 50,
    justifyContent: 'center',
    borderRadius: 150 / 2,
    marginVertical: 30,
  },
  inputBox: {
    height: 40,
    borderColor: '#dddddd',
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 8,
    elevation: 3,
  },
});

export default Style;
