import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { statusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import WelcomeScreen from './src/screen/Welcome'
import LoginScreen from './src/screen/Login'
import RegisterScreen from './src/screen/Register'
import DasboardScreen from './src/screen/Dashboard'
import DetailPageScreen from './src/screen/DetailPage'
import TambahHewanScreen from './src/screen/TambahHewan'
import SearchBar1Screen from './src/screen/SearchBar1'
import SearchbarScreen from './src/screen/Searchbar';
import NotificationsScreen from './src/screen/Notifications';
import ProfileScreen from './src/screen/Profile';
import EditProfile from './src/screen/EditProfile'
import SuccessScreen from './src/screen/Success';
import MessangerScreen from './src/screen/Messanger';
import ChatScreen from './src/screen/Chat';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
return (
<Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor:'#FDCB5A',
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#fff",
      },
    }}
    >
    <Tab.Screen
    name="Dashboard"
    component={DasboardScreen}
    options={{
      tabBarIcon:({color,size}) => (
        <Fontisto name="home" color={color} size={size} />
      ),
      }}
      />
      <Tab.Screen
      name="search"
      component={SearchBar1Screen}
      options={{
        tabBarIcon:({color, size}) => (
          <Fontisto name="search" color={color} size={size} />
        ),
      }}
      />
       <Tab.Screen
      name="comment"
      component={MessangerScreen}
      options={{
        tabBarIcon:({color, size}) => (
          <Icon name="comment" color={color} size={size} />
        ),
      }}
      />
       <Tab.Screen
      name="notification"
      component={NotificationsScreen}
      options={{
        tabBarIcon:({color, size}) => (
          <Icon name="bell" color={color} size={size} />
        ),
      }}
      />
       <Tab.Screen
      name="profile"
      component={ProfileScreen}
      options={{
        tabBarIcon:({color, size}) => (
          <Icon name="account" color={color} size={size} />
        ),
      }}
      />
      </Tab.Navigator>
    )
}
  
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='DashboardScreen' component={RootHome} />
        <Stack.Screen name='DetailPageScreen' component={DetailPageScreen} />
        <Stack.Screen name='TambahHewanScreen' component={TambahHewanScreen} />
        <Stack.Screen name='SearchBar1Screen' component={SearchBar1Screen} />
        <Stack.Screen name='SearchbarScreen' component={SearchbarScreen} />
        <Stack.Screen name='NotificationsScreen' component={NotificationsScreen} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='SuccessScreen' component={SuccessScreen} />
        <Stack.Screen name="MessangerScreen" component={MessangerScreen}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App