import { View, Text, Button, Image, TextInput } from 'react-native'
import React, {useState} from 'react'

const Hello = () => {
    const [name, setName] = useState('Son Tung MP3');
  return (
    <View>
      <Text>Tên ca sĩ: {name}</Text>
      <TextInput placeholder='enter your name'/>
      <Button title='Submit'/>
      <Image 
        source={require('../../media/image/avatar-cute-meo-con-than-chet.jpg') }
        style ={{width: 200, height: 200}}
        resizeMode='cover'/>
    </View>
  )
}

export default Hello