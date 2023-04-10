import { View, Text, StyleSheet, Pressable, TextInput, Image, ToastAndroid } from 'react-native'
import React,{useState, useContext} from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../utilities/UserContext';

const SignUp = (props) => {
    const { navigation, route: {params: {name}} } = props;
    const { register } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async() => {
        const result = await register(email, password);
        if (result) {
            ToastAndroid.show('Register success', ToastAndroid.SHORT);
            navigation.navigate('Login');
        } else {
            ToastAndroid.show('Register fail', ToastAndroid.SHORT);
            setEmail('');
            setPassword('');
        }
    }

    return (
        <View style={myStyles.container}>
            <Text style={[myStyles.title, myStyles.hello]}>Hello !</Text>
            <Text style={myStyles.welcome}>Sign up to get Started</Text>

            <Text style={myStyles.username}>Username* {name}</Text>
            <TextInput style={myStyles.TextInput} 
                onChangeText= {setEmail}
                value={email}
                
            />

            <Text style={myStyles.password}>Password*</Text>
            <View style={[myStyles.ContainerPassword]}>
                <TextInput style={myStyles.TextInput} 
                    secureTextEntry 
                    onChangeText= {setPassword}
                    value={password}
                />
                <Image source={require('../../../src/media/image/eye.jpg')} style={[myStyles.eyeIcon]} />
            </View>

            <View style={[myStyles.add]}>
                <View style={[myStyles.checkRemember]}>
                    <CheckBox style={[myStyles.checkBox]} />
                    <Text style={[myStyles.Remember,]}>Remember me</Text>
                </View>
            </View>
            <Pressable style={myStyles.btnSignUp}
            onPress={handleRegister}
            >
                <Text style={myStyles.btnSignUpLable}>SignUp</Text>
            </Pressable>

            <Text style={myStyles.text01}>Or continue with</Text>

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

            <Text style={myStyles.text01}>Already have an account ? 
            <Text style={myStyles.label02}
                //startActivity(new Intent(this, Login.class));
                onPress={() => navigation.navigate('Login')}
            >Login</Text></Text>
        </View>
    )
}

const myStyles = StyleSheet.create({

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
    checkBox: {
        borderRadius: 3,
      },
      checkRemember: {
        alignItems: 'center',
        padding: 0,
        height: 24,
        flexDirection: 'row',
      },
    ContainerPassword: {
        position: 'relative',

    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: 16,
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

    label02: {
        color: '#1877F2',
    },

    text01: {
        marginTop: 16,
        padding: 5,
        textAlign: 'center',
    },
    label: {
        marginTop: 10,
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
    },
    btnSignUpLable: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#fff',
    },
    btnSignUp: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1877f2',
        borderRadius: 6,
        height: 50,
        width: '100%',
        paddingVertical: 13,
        paddingHorizontal: 24,
    },
    TextInput: {
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#4e4b66',
        borderRadius: 6,
        backgroundColor: '#fff',
        width: '100%',
        height: 48,
        padding: 10,
    },
    password: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66',
        marginTop: 30,
    },
    username: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4e4b66',
        marginTop: 40,
    },
    welcome: {
        width: 222,
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
        color: '#4e4b66'
    },
    title: {
        lineHeight: 72,
        fontWeight: "bold",
        fontSize: 48,
    },
    again: {
        color: '#1877f2',
    },
    hello: {
        color: '#1877F2',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 24,
    }

})

export default SignUp