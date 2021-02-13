import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import PerfilCliente from './PerfilCliente/perfilCliente';
import anexarDocumentos from './PerfilCliente/anexarDocumentos';
import preloadCadastro from './Preload/preloadCadastro';
import Laudo from './Pedido/laudo';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

 const MainTabNavigation = ({ route,navigation }) => {
    return (
    <Tab.Navigator  tabBarOptions={{ style:{backgroundColor:'#113d35'}, activeTintColor: '#2ca86a',inactiveTintColor: 'white'}} >
        <Tab.Screen name="Home"  component={PerfilCliente} />
        <Tab.Screen name="Pedidos"  component={Laudo} />
        <Tab.Screen name="Perfil" component={preloadCadastro} />
    </Tab.Navigator>
      );
}


export default MainTabNavigation;