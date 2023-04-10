import { StyleSheet, Text, View, Image, SearchBar, TextInput, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { NewsContext } from '../utilities/NewsContext'



const Home = () => {
    const { navigation } = props;
    const { getNews } = useContext(NewsContext);
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const [refeshing, setRefeshing] = useState(false);
    useEffect(() => {
        const getData = async () => {
            const result = await getNews();
            setData(result);
        }
        getData();
        return () => {

        }
    }, [])

    const onRefresh = () => {
        setRefeshing(true);
        const getData = async () => {
            const result = await getNews();
            setData(result);
            setRefeshing(false);
        }
        getData();
    }

    const renderItems = (props) => {
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

            <View style={[myStyle.Item]}>
                <Image style={[myStyle.ImgItem]}
                    source={{ uri: image }}
                />
                <View style={[myStyle.TextItem]}>
                    <Text style={[myStyle.TitleItem]}>{displayDate(createdAt)}</Text>
                    <Text style={[myStyle.ContentItem]}>{title}</Text>
                    <View style={[myStyle.TimeItem]}>
                        <View style={[myStyle.iconTime]}>
                            <View style={[myStyle.BBCNew]}>
                                <Image source={require('../../../src/media/image/IconBBC.png')} style={[myStyle.iconBBC]} />
                                <Text style={[myStyle.TitleBBC]}>BBC News</Text>
                            </View>
                            <Text style={[myStyle.Time]}>1h ago</Text>
                        </View>
                        <Image source={require('../../../src/media/image/More.png')} style={[myStyle.More]} />
                    </View>
                </View>
            </View>
        );
    }
    state = {
        search: '',
    };
    updateSearch = (search) => {
        this.setState({ search });
    };
    const { search } = this.state;
    return (
        <View style={[myStyle.container]}>
            <FlatList
                data={data}
                renderItem={renderItems}
                keyExtractor={item => item._id}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                refeshing={refeshing}
                onRefresh={onRefresh}
            />
            {/* <ScrollView
                showsVerticalScrollIndicator={false}
                refeshing={refeshing}
                onRefresh={onRefresh}
            >
                {
                    data.map((item, index) => {
                        return renderItems({ item, index });

                    })
                }
            </ScrollView> */}

        </View>
    )
}

export default Home

const myStyle = StyleSheet.create({
    ImgItem: {
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
        padding: 5,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#4e4b66',
        boxSizeing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    Notification: {
        padding: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    Logo: {
        backgroundColor: '#1877F2',
        height: "53%",
    },
    Top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 0,
        width: '100%',
        height: 56,

    },
    container: {
        flex: 1,
        padding: 24,
    },
})