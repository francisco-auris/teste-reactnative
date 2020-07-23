import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    imagem: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginBottom: 30
    },  
    nome: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20
    },
    meumenu: {
        height: 60,
        alignItems: 'center'
    },
    container: {
        width: 240,
        height: 240,
    },
    campo: {
        width: '100%',
        borderColor: 'black',
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    footer: {
        height:40,
    },
    botao: {
        width: '100%',
        borderRadius: 10
    }
});

export default style;
