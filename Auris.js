import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import style from './style'

class Auris extends Component {

    render() {
        return (
            <View>
                <Image
                    style={style.imagem}
                    source={{
                     uri: 'https://lh3.googleusercontent.com/proxy/9OdYlgVd0BJJDNLpKyB1gFbQoQJucpXmx8_PUjv0e4y6o77ki1qVkhtka_LeDqHLDknDrw88Laa8UlOa-gwbrGDLDT8okSofH6O0LTrVf_OIBb-A',
                    }}
                />
                <Text style={style.nome}>Login</Text>
                <View style={style.meumenu}>
                    <Text>Seja Bem vindo ao Sistema</Text>
                </View>
                <View style={style.container}>
                    <TextInput
                        style={style.campo}
                        placeholder="Entre com seu email"
                        keyboardType="email-address"
                    ></TextInput>

                    <TextInput
                        style={style.campo}
                        placeholder="Entre com seu email"
                        keyboardType="default"
                        secureTextEntry={true}
                    ></TextInput>
                </View>
                <View style={style.footer}>
                    <Button
                        style={style.botao}
                        title="Entrar"
                        color="#2ecc71"
                    />
                </View>
            </View>
        );
    }

}


export default Auris;