
import React from 'react'
import { Text, View, TextInput, Button, Image } from 'react-native';




import Screen3 from './Screen3';
import Screen2 from './Screen2';
import SoXo from './XoSo';

//khai báo thư viện màn hình chuyển đổi
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Main = (props) => {
  const { navigation } = props;
  return (

    // <Home />

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarLabel: ({ focused }) => {
            if (route.name == "Screen3") {
              if (focused) {
                return <Text style={{ color: 'red' }}>Screen3</Text>
              }
              else {
                return <Text style={{ color: 'black' }}>Screen3</Text>
              }
            }
            else if (route.name == "Screen2") {
              if (focused) {
                return <Text style={{ color: 'red' }}>Screen2</Text>
              }
              else {
                return <Text style={{ color: 'black' }}>Screen2</Text>
              }
            }
            else if (route.name == "SoXo") {
              if (focused) {
                return <Text style={{ color: 'red' }}>SoXo</Text>
              } else {
                return <Text style={{ color: 'black' }}>SoXo</Text>
              }
            }
          },

          headerShown: false, //ẩn header
        })}

      >
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="SoXo" component={SoXo} />
      </Tab.Navigator>


      {/* <Stack.Navigator
        screenOptions={{headerShown: false}}  //ẩn header
      >
        {/* khai báo màn hình cần chuyển 
             cái nào cần chạy đầu tiên thì để trên cùng*
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator> */}
    </NavigationContainer>
  )
}

export default Main