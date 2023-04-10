import { StyleSheet, Text, View, TextInput, Pressable, Image, ToastAndroid, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { UserContext } from '../utilities/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosInstance from '../../axiosClient/AxiosInstance';

const Login = (props) => {
  const { navigation } = props;

  const { login,setinfoUser, infoUser} = useContext(UserContext);

  const [email, setEmail] = useState('hoa@gmail.com');
  const [password, setPassword] = useState('1');

  const handleLogin = async () => {
    const result = await login(email, password);
    //lưu user
    if (!result) {
      Alert.alert('Login fail', 'Please check your email and password again');
      setEmail('');
      setPassword('');
    }
    // else{
    //   //thêm user vào state
    //   setInfoUser(result.data.user);
    //   console.log('********result', result.data.user);
    // }
  }
  return (
    <View style={myStyles.container}>

      <Text style={[myStyles.Hello, myStyles.Title]}>Hello</Text>
      <Text style={[myStyles.Again, myStyles.Title]}>Again!</Text>
      <Text style={[myStyles.Welcome]}>Welcome back you’ve been missed</Text>


      <Text style={[myStyles.Username]}>Username*</Text>
      <TextInput
        value={email}
        style={myStyles.TextInput}
        onChangeText={setEmail}
      />

      <Text style={[myStyles.Username, myStyles.Password]}>Password*</Text>
      <View style={[myStyles.ContainerPassword]}>
        <TextInput style={myStyles.TextInput} secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Image source={require('../../../src/media/image/eye.jpg')} style={[myStyles.eyeIcon]} />
      </View>


      <View style={[myStyles.add]}>
        <View style={[myStyles.checkRemember]}>
          <CheckBox style={[myStyles.checkBox]} />
          <Text style={[myStyles.Remember,]}>Remember me</Text>
        </View>

        <Text style={[myStyles.Forgot,]}>Forgot password?</Text>
      </View>


      <Pressable style={[myStyles.bntLogin]}
        onPress={handleLogin}
      >
        <Text style={[myStyles.Login]}>Login</Text>
      </Pressable>

      <View style={[myStyles.line]}>
        <Text style={[myStyles.OrLogin]}>or continue with</Text>
      </View>

      <View style={myStyles.btnFacebookGoogle}>
        <Pressable style={myStyles.btnSocial}>
          <Image source={require('../../../src/media/image/IconFB.jpg')} style={[myStyles.iconFacebook]} />
          <Text style={myStyles.label03}>Facebook</Text>
        </Pressable>

        <Pressable style={myStyles.btnSocial}>
          <Image source={require('../../../src/media/image/IconGG.jpg')} style={[myStyles.iconGoogle]} />
          <Text style={myStyles.label03}>Google</Text>
        </Pressable>
      </View>

      <Text style={myStyles.text01}>Don't have account ?
        <Text style={myStyles.label02}
          //startActivity(new Intent(this, SignUp.class));
          onPress={() => navigation.navigate('SignUp',
            {
              //truyền dữ liệu qua màn hình khác
              name: 'Thái Hòa',
            }
          )}
        >Sign Up</Text>
      </Text>
    </View>
  )
}

export default Login

const myStyles = StyleSheet.create({
  ContainerPassword: {
    position: 'relative',

  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 16,
  },
  checkBox: {
    borderRadius: 3,
  },
  checkRemember: {
    alignItems: 'center',
    padding: 0,
    height: 24,
    flexDirection: 'row',
  },
  label02: {
    color: '#1877F2',
  },

  text01: {
    marginTop: 16,
    padding: 5,
    textAlign: 'center',
  },
  label03: {
    fontSize: 15,
    color: '#667080',
    letterSpacing: 0.12,
  },

  btnSocial: {
    flexDirection: 'row',
    width: 155,
    height: 45,
    backgroundColor: '#EEF1F4',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnFacebookGoogle: {
    marginTop: 16,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrLogin: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4e4b66',
    order: 4,
    flexGrow: 0,
  },
  line: {
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Login: {

    letterSpacing: 0.12,
    lineHeight: 24,
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  bntLogin: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#1877F2',
    height: 50,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 13,
  },
  Forgot: {
    marginLeft: 8,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#5890FF',
    order: 1,
    flexGrow: 0,
  },
  Remember: {
    paddingLeft: 4,
    fontWeight: '400',
    fontSize: 14,
    padding: 0,
    order: 1,
    color: "#4E4B66",
    flexGrow: 0,
  },
  add: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    flexDirection: 'row',
    width: "100%",
    height: 24,
    padding: 0,
    order: 1,
    flexGrow: 0,
  },
  Password: {
    marginTop: 16,
  },
  TextInput: {
    justifyContent: 'flex-end',
    width: '100%',
    height: 48,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#Fff',
    borderColor: '#4e4B66',
    borderWidth: 1,
    marginTop: 4,
    order: 1,
    flexGrow: 0,

  },
  Username: {
    marginTop: 48,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    color: '#4E4B66',
    letterSpacing: 0.12,
  },
  Welcome: {
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    width: 222,

  },
  Hello: {
    color: '#050505',
  },
  Again: {

    color: '#1877f2',
  },
  Title: {
    fontSize: 48,
    lineHeight: 72,
    fontWeight: 'bold',
  },
  container: {

    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
});