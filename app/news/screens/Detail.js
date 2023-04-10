import { StyleSheet, Text, View, Image, Pressable,ScrollView } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { NewsContext } from '../utilities/NewsContext'


const Detail = (props) => {
    const{navigation} = props;
    const id = props.route?.params?.id;
    const {getDetail} = useContext(NewsContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const result = await getDetail(id);
            setData(result);
        }
        getData();
        if(id) getData();
        return () => {
            
        }
    },[id])

    return (
        ( id && data && data._id.toString() == id .toString())?
        <View style={[myStyles.container]}>
            <ScrollView>
            <View style={[myStyles.Channel]}>
                <View style={[myStyles.ItemChannel]}>
                    <View style={[myStyles.Total]}>
                    <Image source={{uri: data.image}} style={[myStyles.iconBBC]} />
                    <View style={[myStyles.TitleChannel]}>
                        <Text style={[myStyles.TitleBBC]}>BBC News</Text>
                        <Text style={[myStyles.TimeBBC]}>14m ago</Text>
                    </View>
                    </View>
                    <Pressable style={[myStyles.bntFollow]}>
                        <Text style={[myStyles.Follow]}>Following</Text>
                    </Pressable>
                </View>
            </View>
            <Image source={{uri: data.image}} style={[myStyles.Img]} />
            <View style={[myStyles.Title]}>
                <Text style={[myStyles.TitleLittle]}>Europe</Text>
                <Text style={[myStyles.TitleNew]}>{data.title}</Text>
            </View>
            <Text style={[myStyles.News]}>{data.content}</Text>
            </ScrollView>
        </View>
        :<View>
            <Text style={{fontSize:25, fontWeight:"700"}}>Đang tải vui lòng chờ</Text>
        </View>
    )
}

export default Detail

const myStyles = StyleSheet.create({
    News: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        Color: '#4E4B66',
        order: 4,
    },
    TitleNew: {
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 36,
        letterSpacing: 0.12,
        color: '#000000',
    },
    TitleLittle: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
    },
    Title: {
        paddingTop: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
    },
    Img: {
        width: '100%',
        height: 200,
    },
    Follow: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF',
    },
    bntFollow: {
        width: 102,
        height: 34,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1877F2',
        borderRadius: 6,
    },
    Total: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TimeBBC: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
        order: 1,
    },
    TitleBBC: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#000000',
    },
    TitleChannel: {
        paddingLeft: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        order: 1,
    },
    ItemChannel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        order: 1,
    },
    Channel: {
        paddingBottom: 16,
        paddingTop: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        order: 1,
        flexGrow: 0,
    },
    container: {
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

    },
})