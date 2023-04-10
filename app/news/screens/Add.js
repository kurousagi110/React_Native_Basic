import {
    StyleSheet, Text, View, TextInput, Pressable,
    ToastAndroid, Alert, Image
} from 'react-native'
import React, { useState, useContext, useEffect, useCallback } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { NewsContext } from '../utilities/NewsContext';

const Add = (props) => {
    const { navigation } = props;

    const { upLoadImage, addNews } = useContext(NewsContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
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
        setImage(cover.uri);
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


    //publish bài viết
    const handlePublish = async () => {
        const result = await addNews(title, content, image);
        if (result) {
            setTitle('');
            setContent('');
            setImage(null);
            navigation.navigate('Home');
            Alert.alert('Thông báo', 'Đăng bài thành công');
        }
        else {

            Alert.alert('Thông báo', 'Đăng bài thất bại');
        }
    }

    return (
        <View style={styles.container}>
            {
                (cover) ?
                    <Image source={{ uri: cover.assets[0]?.uri }}
                        style={{ width: "100%", height: 160, borderRadius: 6 }}
                    /> :
                    <Pressable style={styles.cover} onPress={handleChoosePhoto}>
                        <Image style={styles.plush}
                            source={require('../../../src/media/image/plush.png')}
                        />
                        <Text style={styles.text}>Add Cover Photo</Text>
                    </Pressable>
            }

            <TextInput style={styles.title}
                placeholder='title'
                value={title}
                onChangeText={setTitle}
            >
            </TextInput>
            <TextInput style={styles.title}
                placeholder='content'
                multiline={true}
                numberOfLines={10}
                value={content}
                onChangeText={setContent}

            >
            </TextInput>

            <Pressable style={styles.btnAccept}
                onPress={handlePublish}>
                <Text btnAcceptText>Publish</Text>
            </Pressable>
        </View>
    )
}

export default Add

const styles = StyleSheet.create({

    title: {
        width: '100%',
        marginTop: 20,
        borderWidth: 1, 
        borderSolid: 'solid',
        borderColor: '#FF5E00' ,
    },

    cover: {
        width: '100%',
        height: 183,
        backgroundColor: '#EEF1F4',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#4e4b66',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAcceptText: {
        fontFamily: 'Klarna Text',
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.17,
        color: '#FFFFFF',
    },
    btnAccept: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF5E00',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },
})