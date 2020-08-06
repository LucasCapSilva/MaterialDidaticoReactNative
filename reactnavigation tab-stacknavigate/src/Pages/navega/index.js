import { createStackNavigator } from 'react-navigation-stack';

import FindAllCategoria from '../Home';

import Home from '../Home';
import Detalhes from '../Detalhes';
import Login from '../Login';



const navega = createStackNavigator({
  Home:{
    screen: Home
  },
  Detalhes:{
    screen: Detalhes
  }
});

export default navega;