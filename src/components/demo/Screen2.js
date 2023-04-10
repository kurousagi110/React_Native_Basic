import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Flexbox from './Flexbox';

const Tab = createMaterialTopTabNavigator();


const Screen2 = (props) => {
    const {navigation} = props;
  return (
    <Tab.Navigator>
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Flexbox" component={Flexbox} />
    </Tab.Navigator>
  )
}

export default Screen2