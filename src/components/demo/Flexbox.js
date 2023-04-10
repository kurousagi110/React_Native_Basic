import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flexbox = () => {
    return (
        <View style={[myStyle.container]}>
            <View style = {[myStyle.row]}>
            <View style = {[myStyle.row]}>
            <Text style={[myStyle.view1]}></Text>
            <Text style={[myStyle.view2]}></Text>
            
            </View>
            <Text style={[myStyle.view4]}></Text>
            <View></View>
            </View>
            
            <View style = {[myStyle.row]}> 
            <Text style={[myStyle.view3]}></Text>
            <Text style={[myStyle.view4]}></Text>
            </View>
            
        </View>
    )
}

export default Flexbox

const myStyle = StyleSheet.create({
    row: {
        alignItems: 'center',
        flexDirection: 'column',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',

    },
    view1: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
    },
    view2: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',

    },
    view3: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
    },
    view4: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
    },
})
