import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Topo = () => {
    return (
        <View style={style.navigator}>
            <View style={style.boxMenu}>
                <Image source={require('../assets/menu.png')} style={style.menu} />
            </View>
            <View style={style.boxTitle}>
                <Text style={style.texto}>Products</Text>
            </View>
            <View style={style.boxIcone}>
                <Image source={require('../assets/back.png')} style={style.menu} />
            </View>
            
            
        </View>
    );
}

const style = StyleSheet.create({
    boxMenu: {
        width: 60,
        height: 60,
        alignSelf: 'flex-start'
    },
    boxTitle: {
        width: '67%',
        height: 60,
        textAlign: "center"
    },
    boxIcone: {
        width: 60,
        height: 60,
        alignSelf: 'flex-end',
    },
    navigator: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: '#e74c3c',
        position: 'absolute',
        marginTop: 25
    },
    texto: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginTop: 15,
        marginLeft: 20
    },
    menu: {
        width: 32,
        height: 32,
        marginTop: 12,
        marginLeft: 12,
        alignSelf: 'flex-start'
    }
});

export default Topo;