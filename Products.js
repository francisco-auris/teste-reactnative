import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    SafeAreaView, 
    ScrollView, 
    TextInput, 
    FlatList, 
    Image,
    TouchableHighlight 
  } from 'react-native';

import Topo from './components/Topo';
import Bottom from './components/Bottom';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      img: 'https://reactnative.dev/img/tiny_logo.png',
      price: 'R$ 25,20'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img: 'https://beefpoint-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg',
      price: 'R$ 25,20'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img: 'https://beefpoint-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg',
      price: 'R$ 25,20'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba0',
      title: 'First Item',
      img: 'https://reactnative.dev/img/tiny_logo.png',
      price: 'R$ 25,20'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f639',
      title: 'Second Item',
      img: 'https://beefpoint-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg',
      price: 'R$ 25,20'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d720',
      title: 'Third Item',
      img: 'https://beefpoint-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AAK5oqN-360x233.jpeg',
      price: 'R$ 25,20'
    }
  ];

const Item = ({ title, image, price }) => (
    <TouchableHighlight>
      <View style={style.item}>
        <View style={style.textoItem}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.subtitle}>{price}</Text>
        </View>
          
          <Image source={{uri: image}} style={style.foto} />
      </View>
    </TouchableHighlight>
);

const renderItem = ({ item }) => (
    <Item title={item.title} image={item.img} price={item.price} />
  );

class Products extends Component {
    
    render() {
        return (
            <SafeAreaView>
                <Topo />
                <View style={style.container}>
            
                    <ScrollView>
                        <TextInput 
                            style={style.search}
                            placeholder="Digite para filtrar"
                        />
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </ScrollView>
                </View>
                <Bottom />
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
  textoItem: {
    width: '70%'
  },  
    container: {
        width: '100%',
        marginTop: 85,
        alignItems: 'center',
    },
    search: {
        position: 'relative',
        width: 320,
        height: 50,
        backgroundColor: '#fff',
        paddingLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 50,
        borderColor: '#e74c3c',
        borderStyle: "solid",
        borderWidth: 1
    },
    foto: {
      width: 80,
      height: 80,
      borderRadius: 10,
    },  
    item: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      width: '95%',
      padding: 20,
      marginVertical: 8,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      borderColor: '#EEE',
      borderStyle: "solid",
      borderWidth: 1
    },
    title: {
      fontSize: 22,
      color: '#BBB'
    },
    subtitle: {
      fontSize: 32,
      color: 'red',
      marginTop: 10,
      fontWeight: "bold"
    }
});

export default Products;