import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Styles from '../NavigationDrawer/Style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NavigationDrawer = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={Styles.drawerContent}>
          <View style={Styles.userInfoSection}>
            <View>
              <Image
                style={{width: 90, height: 90, marginTop: 10}}
                source={{
                  uri:
                    'https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={Styles.userName}>Roberto</Text>
              <Image
                source={{
                  uri:
                    'https://cdn1.vectorstock.com/i/1000x1000/33/15/edit-pencil-icon-vector-13483315.jpg',
                }}
                style={{width: 20, height: 20, marginEnd: 10}}
              />
            </View>
          </View>
          <View style={{color: 'black'}}>
            <TouchableOpacity
              style={Styles.menu}
              onPress={() => {
                props.navigation.navigate('Home');
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  marginLeft: 20,
                }}>
                Home
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                backgroundColor: '#dddddd',
                height: 1,
                marginLeft: 20,
              }}
            />
            <TouchableOpacity
              style={Styles.menu}
              onPress={() => {
                props.navigation.navigate('Product');
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  marginLeft: 20,
                }}>
                Product
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                backgroundColor: '#dddddd',
                height: 1,
                marginLeft: 20,
              }}
            />
            <TouchableOpacity
              style={Styles.menu}
              onPress={() => {
                props.navigation.navigate('About');
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  marginLeft: 20,
                }}>
                About
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                backgroundColor: '#dddddd',
                height: 1,
                marginLeft: 20,
              }}
            />
            <TouchableOpacity
              style={Styles.menu}
              onPress={() => {
                props.navigation.navigate('Login');
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  marginLeft: 20,
                }}>
                Logout
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                backgroundColor: '#dddddd',
                height: 1,
                marginLeft: 20,
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default NavigationDrawer;
