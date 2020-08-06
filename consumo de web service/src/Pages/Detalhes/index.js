import React, { Component } from "react"

import { View, Text, Button, FlatList } from "react-native"
import api from "../../Service"


export default class DetailScreen extends Component {
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
      <View>
         <Button
           onPress={() => this.props.navigation.navigate('Home')}
            title="Produto"
            color="red"
          />
        <FlatList
          data={this.state.products}
          renderItem={({ item }) =>
            <View style={{ borderWidth: 1 }}>
              <Text >{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>    
            </View>}
        />
         
      </View>
    )
  }
}