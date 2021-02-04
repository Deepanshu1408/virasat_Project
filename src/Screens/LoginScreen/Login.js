import React, {useState} from 'react';
import {View, TextInput, Text, StatusBar, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Style from './Styles';

const Login = (props) => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const onSubmit = () => {
    if (!userName || !password) {
      alert('User Name or Password filled is empty');
    } else {
      props.navigation.navigate('Home');
    }
  };
  return (
    <View style={Style.main}>
      <StatusBar backgroundColor="#0cada8" />
      <Text
        style={{
          padding: 20,
          fontSize: 24,
          backgroundColor: '#0cada8',
          color: '#fff',
          fontWeight: 'bold',
        }}>
        Login
      </Text>
      <View style={Style.holder}>
        <Image
          style={{width: 90, height: 90}}
          source={{
            uri: 'https://miro.medium.com/max/560/1*MccriYX-ciBniUzRKAUsAw.png',
          }}
        />
        <View style={{width: '80%'}}>
          <Text style={Style.heading}>User Name</Text>
          <TextInput
            style={Style.inputBox}
            placeholder="User Name"
            onChangeText={(userName) => setuserName(userName)}
          />
        </View>
        <View style={{width: '80%'}}>
          <Text style={Style.heading}>Password</Text>
          <TextInput
            placeholder="Password"
            style={Style.inputBox}
            secureTextEntry={true}
            onChangeText={(password) => setpassword(password)}
          />
        </View>

        <TouchableOpacity style={Style.button} onPress={onSubmit}>
          <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 18}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
