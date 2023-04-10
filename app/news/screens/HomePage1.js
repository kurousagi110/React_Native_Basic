import { StyleSheet, Text, View, Image, SearchBar, TextInput, FlatList, Pressable } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { NewsContext } from '../utilities/NewsContext';

const HomePage1 = (props) => {
    const { navigation } = props;
    const { getNews } = useContext(NewsContext);
    const { name, setName } = useState('');
    const [data, setData] = useState([]);
    const [refeshing, setRefeshing] = useState(false);
    const [first, setFirst] = useState(true)
    // useEffects(() => { }) //==> chay 1 lan

    useEffect(() => {
        const getData = async () => {
            try {
                console.log(getNews);
                const result = await getNews();
                setData(result);
            } catch (error) {
                console.log('>>>>>>>>>>>>>', error);
            }

        };
        getData();
        return () => { }
    }, []) //==> chay khi component duoc goi 

    // useEffects(() => { }, [data]) //==> chay khi component duoc goi 
    const onRefresh = () => {
        setRefeshing(true);
        const getData = async () => {
            const result = await getNews();
            setData(result);
            setRefeshing(false);
        }
        getData();
    }

    // state = {
    //     search: '',
    // };
    // updateSearch = (search) => {
    //     this.setState({ search });
    // };
    // const { search } = this.state;
    
   console.log(refeshing);

    const renderItem = (props) => {
        const { item } = props;
        const { title, image, createdAt, _id } = item;

        const displayDate = (value) => {
            const date = new Date(value);
            const day = date.getDay();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
        
        return (
            <Pressable onPress={() => navigation.navigate('Detail', { id: _id })}>
                <View style={[myStyle.Item]}>
                    <Image source={{ uri: image }} style={[myStyle.ImgItem]} />
                    <View style={[myStyle.TextItem]}>
                        <Text style={[myStyle.TitleItem]}>Europe</Text>
                        <Text style={[myStyle.ContentItem]}>{title}</Text>

                        <View style={[myStyle.TimeItem]}>
                            <View style={[myStyle.iconTime]}>
                                <View style={[myStyle.BBCNew]}>
                                    <Image source={require('../../../src/media/image/IconBBC.png')} style={[myStyle.iconBBC]} />
                                    <Text style={[myStyle.TitleBBC]}>BBC News</Text>
                                </View>
                                <Text style={[myStyle.Time]}>{displayDate(createdAt)}</Text>
                            </View>
                            <Image source={require('../../../src/media/image/More.png')} style={[myStyle.More]} />
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    };

    return (
        <View style={[myStyle.container]}>
            <View style={[myStyle.Top]}>
                <Image source={require('../../../src/media/image/Logo.jpg')} style={[myStyle.Logo]} />
                <Image source={require('../../../src/media/image/Notification.jpg')} style={[myStyle.Notification]} />
            </View>

            <View style={[myStyle.imgFind]}>
                <View style={[myStyle.SearchBar]}>
                    <View>
                        <Image source={require('../../../src/media/image/IconFind.png')} style={[myStyle.iconFind]} />
                    </View>
                    <TextInput style={myStyle.TextInput} />
                    <View>
                        <Image source={require('../../../src/media/image/IconLoc.png')} style={[myStyle.iconFill]} />
                    </View>
                </View>
            </View>


            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                refreshing={refeshing}
                onRefresh={onRefresh}/>
           
        </View>
    )
}


export default HomePage1

const myStyle = StyleSheet.create({
    imgFind: {
        position: 'relative',
    },
    iconFind: {
        position: 'absolute',
        top: -10,
        left: 10,
    },
    iconFill: {
        position: 'absolute',
        top: -10,
        right: 10,
    },

    ImgItem: {
        height: 110,
        width: 100,
        padding: 8,
    },
    Time: {
        paddingLeft: 8,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4e4b66',
        oder: 1,
    },
    TitleBBC: {
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4e4b66',
        oder: 1,
        paddingLeft: 4,
    },
    iconBBC: {
        borderRadius: 0,
    },
    BBCNew: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    iconTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 0,

    },
    TimeItem: {
        paddingTop: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        width: '69%',
        oder: 2,

    },
    ContentItem: {
        paddingTop: 4,
        width: "70%",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
        oder: 1,
    },
    TitleItem: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: 0.12,
        color: '#4e4b66',
    },
    TextItem: {
        paddingLeft: 4,
        flexDirection: 'column',
        alignItems: 'flex-start',
        display: 'flex',
        padding: 0,
        width: '100%',
        oder: 1,
    },
    Item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 8,
        width: '100%',
        borderRadius: 6,
    },
    ListView: {
        paddingTop: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
    },
    TextInput: {
        padding: 10,
        width: '80%',
        borderRadius: 6,
        oder: 1,

    },
    SearchBar: {
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4E4B66',
        boxSizeing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    Notification: {
        height: "70%",
        width: "10%",
        borderRadius: 6,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    Logo: {
        height: "55%",
    },
    Top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 55,
        // backgroundColor: 'yellow',

    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "white",
    },
})

// var data = [
//     {
//         "_id": "63bfa809c4f47f0016aee205",
//         "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },
//     {
//         "_id": "63bfa809c4f47f0016aee206",
//         "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },
//     {
//         "_id": "63bfa809c4f47f0016aee207",
//         "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },
//     {
//         "_id": "63bfa809c4f47f0016aee208",
//         "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },
//     {
//         "_id": "63bfa809c4f47f0016aee209",
//         "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
//         "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//         "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//         "createdAt": "2023-01-12T06:26:17.539Z",
//         "createdBy": {
//             "_id": "63ac39aeedf7c80016c57a67",
//             "name": "",
//             "avatar": ""
//         }
//     },
// ]