/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useContext,createContext} from 'react';
import { UserProvider } from './app/user/utilities/UserContext';
import { NewsProvider } from './app/news/utilities/NewsContext';
import AppNavigation from './app/navigation/AppNavigation';
import Profile from './src/components//demo/Profile';








const App = () => {


  return (
    // <Profile/>
    
    <UserProvider>
      <NewsProvider>
        <AppNavigation/>
      </NewsProvider>
    </UserProvider>
    // <Home/>
  )
};
export default App;



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
//khai báo thư viện màn hình chuyển đổi
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// //tạo kho
// const AppContext = createContext();
// const AppProvider = (props) => {
//   const {children} = props;
//   const [count,setCount] = useState(0);
//   return(
//     <AppContext.Provider value={{count,setCount}}>
//       {children}
//     </AppContext.Provider>
//   )
// }
// //lấy data từ kho
// const Screen5 = props => {
//   const{count ,setCount} = useContext(AppContext);
//   return(
//     <View>
//       <Text>Screen5</Text>
//       <Text>{count}</Text>
//     <Button title='tang bien' onPress={()=>setCount(count+1)}/>
//     </View>
//   )
// }
// const Screen6 = props => {
//   const{count} = useContext(AppContext);
//   return(
//     <View>
//       <Text>Screen5</Text>
//       <Text>{count}</Text>
//     </View>
//   )
// }


   // <Home />

    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused }) => {
    //         if (route.name == "Screen3") {
    //           if (focused) {
    //             return <Image source={require('./src/media/image/explore2.png')} style={{ width: 24, height: 24 }} />
    //           }
    //           else {
    //             return <Image source={require('./src/media/image/explore.png')} style={{ width: 24, height: 24 }} />
    //           }
    //         }
    //         else if (route.name == "Screen2") {
    //           if (focused) {
    //             return <Image source={require('./src/media/image/bookmark22.png')} style={{ width: 24, height: 24 }} />
    //           }
    //           else {
    //             return <Image source={require('./src/media/image/bookmark.png')} style={{ width: 24, height: 24 }} />
    //           }
    //         }
    //         else if (route.name == "SoXo") {
    //           if (focused) {
    //             return <Image source={require('./src/media/image/explore2.png')} style={{ width: 24, height: 24 }} />
    //           }else{
    //             return <Image source={require('./src/media/image/explore.png')} style={{ width: 24, height: 24 }} />
    //           }
    //         }
    //       },
    //       tabBarLabel: ({ focused }) => {
    //         if (route.name == "Screen3") {
    //           if (focused) {
    //             return <Text style={{ color: 'red' }}>Screen3</Text>
    //           }
    //           else {
    //             return <Text style={{ color: 'black' }}>Screen3</Text>
    //           }
    //         }
    //         else if (route.name == "Screen2") {
    //           if (focused) {
    //             return <Text style={{ color: 'red' }}>Screen2</Text>
    //           }
    //           else {
    //             return <Text style={{ color: 'black' }}>Screen2</Text>
    //           }
    //         }
    //         else if (route.name == "SoXo") {
    //           if (focused) {
    //             return <Text style={{ color: 'red' }}>SoXo</Text>
    //           }else{
    //             return <Text style={{ color: 'black' }}>SoXo</Text>
    //           }
    //         }
    //       },

    //       headerShown: false, //ẩn header
    //     })}

    //   >
    //     <Tab.Screen name="Screen3" component={Screen3} />
    //     <Tab.Screen name="Screen2" component={Screen2} />
    //     <Tab.Screen name="SoXo" component={SoXo} />
    //   </Tab.Navigator>


      /* <Stack.Navigator
        screenOptions={{headerShown: false}}  //ẩn header
      >
        {/* khai báo màn hình cần chuyển 
             cái nào cần chạy đầu tiên thì để trên cùng
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>  */
    // </NavigationContainer>