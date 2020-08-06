  
import React, { Component } from 'react';
import { View, Header, TouchableOpacity, Image, StatusBar, Text, Button, StyleSheet ,FlatList} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import api from "../../Service"

export default class Produto extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Produto',
    headerStyle: {
      backgroundColor: '#2897fc',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
      shadowColor: "#000",
      borderColor: "#f4f4f4",
      borderWidth: 0.1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,


    },
    headerLeft: (
      <TouchableOpacity size={30} onPress={() => navigation.toggleDrawer()} style={{ width: '100%', height: 77, alignItems: 'center', justifyContent: 'center' }}>
        <FontAwesome name="bars" size={30} style={{ paddingLeft: 20 }} />
      </TouchableOpacity>
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.findAllProduto();
  }

  findAllProduto = async () => {
    api.get('')
      .then(res => {
        const products = res.data;
        this.setState({ products });
        console(this.state.products)
      })
  }


  render() {
    return (

      <Container>


        <StatusBar
          backgroundColor="#1ab2b3"
          barStyle="light-content"
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")} style={{ alignSelf: "center" }}>
          <FontAwesome name="shopping-bag" size={40}  />
          <Text>Home</Text>
        </TouchableOpacity>

        <Content style={styles.areaFeed}>
          <ScrollView showsVerticalScrollIndicator={false}>

          <FlatList
          data={this.state.products}
          renderItem={({ item }) =>
            <View style={{ borderWidth: 1 }}>
              <View style={styles.card} >
              <View style={{ alignItems: "center" }}>

              <Text style={styles.Titulo}>{item.id}</Text>
              <Text style={styles.Titulo}>{item.name}</Text>
                <Text style={styles.Titulo}>{item.email}</Text>
                
              </View>
              <Image source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133776/0/133776099SZ.png" }}
                style={styles.imagem}
              />
            </View>
            </View>}
        />


            <View style={styles.card} >
              <View style={{ alignItems: "center" }}>

                <Text style={styles.Titulo}>Celular</Text>

              </View>
              <Image source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133776/0/133776099SZ.png" }}
                style={styles.imagem}
              />

              <View style={styles.areaBotoes} >
                <TouchableOpacity>
                  <FontAwesome name="edit" size={30} style={{ paddingLeft: 20 }} />
                  <Text style={{ paddingLeft: 20 }}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="trash" size={30} style={{ paddingLeft: 50 }} />
                  <Text style={{ paddingLeft: 50 }}>Cancelar</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome name="star" size={20} style={{ paddingLeft: 50, color: "gold" }} />
                  <FontAwesome name="star" size={20} style={{ color: "gold" }} />
                  <FontAwesome name="star" size={20} style={{ color: "gold" }} />
                  <FontAwesome name="star" size={20} style={{ color: "gold" }} />
                </View>
              </View>
            </View>

          

            


          </ScrollView>
        </Content>

      </Container>

    );
  }
}


const styles = StyleSheet.create({
  areaFeed: {
    paddingTop: 5,
    backgroundColor: "white"
  },
  card: {
    borderWidth: 0.5,
    width: "100%",
    height: 220,
    alignSelf: 'center',
    
    borderColor: "#ABB2B9",

  }
  ,
  areaBotoes: {
    flexDirection: "row",
    alignItems: "center"
  },
  btnImage: {
    width: 30,
    height: 40,
    padding: 8
  },
  imagem: {
    width: 120,
    height: 120,
    alignSelf: "flex-end"

  },
  Titulo: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start"

  }


});