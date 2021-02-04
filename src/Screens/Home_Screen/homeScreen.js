import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Style from './styles';

const homeScreen = (props) => {
  return (
    <View>
      <StatusBar backgroundColor="#0cada8" />
      <Text
        style={{
          padding: 20,
          fontSize: 24,
          backgroundColor: '#0cada8',
          color: '#fff',
          fontWeight: 'bold',
        }}>
        Home
      </Text>

      <View style={Style.heading}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Instructions</Text>
      </View>
      <View style={Style.list}>
        <Text style={Style.listItem}>
          1. Swipe from left to open the Navigation Drawer
        </Text>
        <Text style={Style.listItem}>
          2. You Can Click on any Drawer icon to navigate on specific screen
        </Text>
        <Text style={Style.listItem}>
          3. On Product screen data will be displayed through the api.
        </Text>
        <Text style={Style.listItem}>
          4. You can update the data available on the Product screen.
        </Text>
        <Text style={Style.listItem}>
          5. You can delete the data from product list by clicking on Delete
          icon.
        </Text>
      </View>
    </View>
  );
};

export default homeScreen;
