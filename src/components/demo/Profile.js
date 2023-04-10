import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity,Alert } from 'react-native'
import React, { useState, useContext, useEffect, useCallback } from 'react'
import { UserContext } from '../../../app/user/utilities/UserContext'
import { launchCamera } from 'react-native-image-picker'
import AxiosInstance from '../../../app/axiosClient/AxiosInstance'
import { NewsContext } from '../../../app/news/utilities/NewsContext';
const Profile = () => {
    const { infoUser, setinfoUser } = useContext(UserContext);
    const { upLoadImage, addNews } = useContext(NewsContext);
    const [image, setImage] = useState(null);

    const [cover, setCover] = useState(null);

    //upload hình ảnh
    const upload = async (cover) => {
        setCover(cover);
        cover = cover.assets[0];
        const formData = new FormData();
        formData.append('image', {
            uri: cover.uri,
            type: cover.type,
            name: cover.fileName,
        });
        const result = await upLoadImage(formData);
        setImage(result?.path);
        setinfoUser.avatar(result?.path)
    }
    //chọn hình ảnh
    const handleChoosePhoto = useCallback((type) => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }
        launchCamera(options, upload);
    }, []);




    // const capture = async () => {
    //     const result = await launchCamera();
    //     console.log('********result', result.assets[0].uri);
    //     //upload hình ảnh
    //     const formdata = new FormData();
    //     formdata.append('image', {
    //         uri: result.assets[0].uri,
    //         type: 'image/jpeg',
    //         name: 'image.jpg',
    //     });
    //     const response = await AxiosInstance('multipart/form-data').post('/media/upload', formdata,);
    //     setinfoUser({...infoUser, avatar: response.data})
    //     console.log('********result', response.data);
    // }
    //update thông tin
    const update = async () => {
        const response = await AxiosInstance().post("/users/update-profile", {name:infoUser.name, address:infoUser.address, phone:infoUser.phone, avatar: cover.assets[0]?.uri});
        if(response.error = true){
            Alert.alert('Thông báo', 'Cập nhật thành công');
        }else{
            Alert.alert('Thông báo', 'Cập nhật thất bại');
        }
    }

    return (
        <View style={[myStyle.container]}>
            <View style={[myStyle.Title]}>
                <Text style={[myStyle.Profile]}>Fill your Profile</Text>
                <TouchableOpacity onPress={handleChoosePhoto}>
                    {
                        infoUser.avatar == ""
                            ?
                            <Image style={[myStyle.imgProfile]} source={require('../../media/image/Anh-cute.webp')} />
                            :
                            <Image style={[myStyle.imgProfile]} source={{  uri: infoUser.avatar }} />
                    }
                </TouchableOpacity>

            </View>


            <Text style={[myStyle.TitleText, myStyle.User]}>Full Name</Text>
            <TextInput style={myStyle.TextInput}
                value={infoUser.name} 
                onChangeText= {(text)=> setinfoUser({...infoUser, name:text}) }/>
            <Text style={[myStyle.TitleText,]}>Address</Text>
            <TextInput style={myStyle.TextInput}
                value={infoUser.address} 
                onChangeText= {(text)=> setinfoUser({...infoUser, address:text}) }/>
            <Text style={[myStyle.TitleText,]}>Phone Number</Text>
            <TextInput style={myStyle.TextInput}
                value={infoUser.phone} 
                onChangeText= {(text)=> setinfoUser({...infoUser, phone:text}) }/>
            <Text style={[myStyle.TitleText,]}>Email</Text>
            <TextInput style={myStyle.TextInput}
                value={infoUser.email} />

            <Pressable style={[myStyle.bntLogin]}
                        onPress={update}>
                <Text style={[myStyle.Login]}>Save</Text>
            </Pressable>
        </View>
    )
}

export default Profile

const myStyle = StyleSheet.create({

    imgProfile: {
        width: 140,
        height: 140,
        marginTop: 24,
        borderRadius: 90,
        backgroundColor: '#F2F2F2',
    },

    Login: {

        letterSpacing: 0.12,
        lineHeight: 24,
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 16,
    },
    bntLogin: {
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#1877F2',
        height: 50,
        width: '100%',
        paddingHorizontal: 24,
        paddingVertical: 13,
    },
    User: {
        marginTop: 12,
    },
    TextInput: {
        width: '100%',
        height: 48,
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#Fff',
        borderColor: '#4e4B66',
        borderWidth: 1,
        marginTop: 4,

    },
    TitleText: {
        marginTop: 8,
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        color: '#4E4B66',
        letterSpacing: 0.12,
    },
    Profile: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },

    Title: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {

        padding: 24,
    },
})