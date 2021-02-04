import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import homeScreen from './src/Screens/Home_Screen/homeScreen';
import Product from './src/components/Main';
import About from './src/Screens/About/About';
import Login from './src/Screens/LoginScreen/Login';
import NavigationDrawer from './src/components/NavigationDrawer/NavigationDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <NavigationDrawer {...props} />}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={homeScreen} />
      <Drawer.Screen name="Product" component={Product} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
