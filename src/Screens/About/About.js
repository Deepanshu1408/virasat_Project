import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Style from './Style';

function About() {
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
        About Us
      </Text>
      <View style={Style.intro}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png',
          }}
        />
        <Text style={Style.introText}>My Self Deepanshu</Text>
      </View>
      <View style={Style.description}>
        <Text style={Style.descriptionText}>
          I have used React Native to build this app.
        </Text>
        <Text style={Style.descriptionText}>
          I have create Navigation Drawer, Login Screen , Product Screen which
          basically get the data from the Dummy Api & user can perform Update
          and Delete option. I have also used Redux in this project.
        </Text>
      </View>
    </View>
  );
}

export default About;
