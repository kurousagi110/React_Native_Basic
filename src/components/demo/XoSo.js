import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native'
import React, { useState } from 'react'

const SoXo = () => {
    const [number, setNumber] = useState('');
    const [randomNumber, setRandomNumber] = useState(null);
    // const [check, setCheck] = useState

    const checkNumber = () => {
        if (isNaN(number)) {
            Alert.alert('Giá trị phải là số nguyên')
            return;
        }
        if (number < 0 || number > 99) {
            Alert.alert('Số phải từ 1 - 99 ')
            return;
        }
        if(number == ''){
            Alert.alert('Mời nhập số ')
            return;
        }
        //set thoi gian chay so
        let a = 0;
        var intervalID = setInterval(() => {
            a = Math.floor(Math.random() * 100);
            setRandomNumber(a);
        }, 50);


        setTimeout(() => {
            clearTimeout(intervalID);
            random = a;
            if (number == random) {
                Alert.alert('Chúc mừng bạn trúng 2 tỷ đồng');
            } else { Alert.alert('Chúc bạn may mắn lần sau.') }
        }, 3000);



    }

    return (
        <View style={myStyles.container}>
            <Text style={myStyles.text}>Sổ số may mắn</Text>
            <Text style={myStyles.result}>Kết quả:</Text>
            <Text style={myStyles.number}>{randomNumber}</Text>
            <TextInput placeholder='nhập số' value={number} onChangeText={text => setNumber(text)} style={myStyles.inputnumber} />
            <Button title='check' onPress={checkNumber} />

        </View>
    )
}

export default SoXo
const myStyles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
        lineHeight: 72,
        color: 'red',
        fontWeight: 'bold',
    },
    number: {
        textAlign: 'center',
        fontSize: 70,
        lineHeight: 72,
        color: '#1877f2',
        fontWeight: 'bold',
    },
    inputnumber: {
        fontSize: 40,
        lineHeight: 72,
        color: 'black',
        fontWeight: 'bold',
    },
    result: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },

});