
import React from 'react'
import { Image, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage1 from '../screens/HomePage1'
import Detail from '../screens/Detail'
import Add from '../screens/Add'
import Profile from '../../../src/components/demo/Profile'

const Tab = createBottomTabNavigator();

const NewsNavigation = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          if (route.name == "Home") {
            if (focused) {
              return <Image source={require('../../../src/media/image/Home1.png')} style={{ width: 24, height: 24 }} />
            }
            else {
              return <Image source={require('../../../src/media/image/home.png')} style={{ width: 24, height: 24 }} />
            }
          }
          else if (route.name == "Detail") {
            if (focused) {
              return <Image source={require('../../../src/media/image/bookmark22.png')} style={{ width: 24, height: 24 }} />
            }
            else {
              return <Image source={require('../../../src/media/image/bookmark.png')} style={{ width: 24, height: 24 }} />
            }
          }
          else if (route.name == "Add") {
            if (focused) {
              return <Image source={require('../../../src/media/image/explore2.png')} style={{ width: 24, height: 24 }} />
            } else {
              return <Image source={require('../../../src/media/image/explore.png')} style={{ width: 24, height: 24 }} />
            }
          }
          else if (route.name == "Profile") {
            if (focused) {
              return <Image source={require('../../../src/media/image/bookmark22.png')} style={{ width: 24, height: 24 }} />
            }
            else {
              return <Image source={require('../../../src/media/image/bookmark.png')} style={{ width: 24, height: 24 }} />
            }
          }

        },
        tabBarIcon: ({ focused }) => {
          if (route.name == "Home") {
            if (focused) {
              return <Text style={{ color: 'red' }}>Home</Text>
            }
            else {
              return <Text style={{ color: 'black' }}>Home</Text>
            }
          }
          else if (route.name == "Detail") {
            if (focused) {
              return <Text style={{ color: 'red' }}>Detail</Text>
            }
            else {
              return <Text style={{ color: 'black' }}>Detail</Text>
            }
          }
          else if (route.name == "Add") {
            if (focused) {
              return <Text style={{ color: 'red' }}>Add</Text>
            } else {
              return <Text style={{ color: 'black' }}>Add</Text>
            }
          }
          else if (route.name == "Profile") {
            if (focused) {
              return <Text style={{ color: 'red' }}>Profile</Text>
            } else {
              return <Text style={{ color: 'black' }}>Profile</Text>
            }
          }
        },
        headerShown: false, //ẩn header
      })}
    >
      <Tab.Screen name="Home" component={HomePage1} />
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default NewsNavigation