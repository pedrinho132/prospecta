import 'react-native-gesture-handler';
import  React, { Component,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Components/reducers/index';
import thunk from 'redux-thunk'
import { GoogleSignin } from '@react-native-community/google-signin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from 'firebase';

import Cadastro from './Components/Stacks/Cadastro/Cadastro';
import PerfilProfissional from './Components/Stacks/PerfilProfissional/PerfilProfissional';
import Mapa from './Components/Stacks/Mapa/Mapa';
import CriarPedido from './Components/Stacks/CriarPedido/CriarPedido'
import Login from './Components/Stacks/Login/Login';
import Avaliacoes from './Components/Stacks/Avaliacoes/Avaliacoes';
import EmAndamento from './Components/Stacks/EmAndamento/EmAndamento';
import Ganhos from './Components/Stacks/Ganhos/Ganhos';
import Pedido from './Components/Stacks/Pedido/Pedido';
import Lance from './Components/Stacks/Pedido/Lance';
import preloadCadastro from './Components/Stacks/Preload/preloadCadastro';
import autenticarLogin from './Components/Stacks/Login/autenticarLogin';
import PerfilCliente from './Components/Stacks/PerfilCliente/perfilCliente';
import anexarDocumentos from './Components/Stacks/PerfilCliente/anexarDocumentos';
import MainTabNavigation from './Components/Stacks/stack';
import Definir from './Components/Stacks/Pedido/definirPedido';
import imovelNovo from './Components/Stacks/Pedido/imovelNovo';
import ACTE from './Components/Stacks/Pedido/ACT';
import LaudoPedido from './Components/Stacks/Pedido/laudosPedido';
import ImovelUsado from './Components/Stacks/Pedido/imovelUsado';
import informarEndereco from './Components/Stacks/Pedido/informarEndereco';
import CameraScreen from './Components/Stacks/Pedido/cameraPedido';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

GoogleSignin.configure({
  webClientId: "457496427322-i8jd5b1slnf517to6h5iogtkj94qoq14.apps.googleusercontent.com",
})



export default class App extends Component {

  render(){

  
    const firebaseConfig = {
      apiKey: "AIzaSyBSNoUr0VHrGtZ55sZIZkR1GnaE3jccgEw",
      authDomain: "prospecta-be829.firebaseapp.com",
      databaseURL: "https://prospecta-be829-default-rtdb.firebaseio.com",
      projectId: "prospecta-be829",
      storageBucket: "prospecta-be829.appspot.com",
      messagingSenderId: "457496427322",
      appId: "1:457496427322:web:a60b0c75deb090d4fe2e03",
      measurementId: "G-RVE06YHVD3"
    };
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}





    

  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <NavigationContainer>

   


      <Stack.Navigator initialRouteName={'Login'} >

        <Stack.Screen
         name="Login"
         
         component={Login}
          options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

         <Stack.Screen
         name="Cadastro"
         component={Cadastro}
          options={{
          title: 'Cadastre-se',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

<Stack.Screen
         name="Mapa"
         component={Mapa}
          options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />


<Stack.Screen
         name="CriarPedido"
         component={CriarPedido}
          options={{
          title: 'Cadastre-se',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

<Stack.Screen
         name="imovelUsado"
         component={ImovelUsado}
          options={{
          title: 'Cadastre-se',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

<Stack.Screen
         name="PerfilProfissional"
         component={PerfilProfissional}
          options={{
          headerShown: false,
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

<Stack.Screen
         name="cameraPedido"
         component={CameraScreen}
          options={{
          headerShown: false,
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />


<Stack.Screen
         name="laudoPedido"
         component={LaudoPedido}
          options={{
          headerShown: false,
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />


        <Stack.Screen
         name="Avaliacoes"
         component={Avaliacoes}
         
          options={{
          title: 'Definina seu Perfil',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#3d7c5d',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
            
          },
        }} />

<Stack.Screen
         name="EmAndamento"
         component={EmAndamento}
         
          options={{
          title: 'Definina seu Perfil',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#3d7c5d',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
            
          },
        }} />

<Stack.Screen
         name="informarEndereco"
         component={informarEndereco}
         
          options={{
          title: 'Definina seu Perfil',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#3d7c5d',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
            
          },
        }} />

<Stack.Screen
         name="Ganhos"
         component={Ganhos}
         
          options={{
          title: 'Definina seu Perfil',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#3d7c5d',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
            
          },
        }} />

<Stack.Screen
         name="Pedido"
         component={Pedido}
          options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} /> 

        <Stack.Screen
         name="Lance"
         component={Lance}
          options={{
          headerStyle: {
            backgroundColor: '#1cbc6c',
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />       

<Stack.Screen
         name="preloadCadastro"
         component={preloadCadastro}
          options={{
          title: 'Cadastre-se',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

<Stack.Screen
         name="autenticarLogin"
         component={autenticarLogin}
          options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />



<Stack.Screen
         name="perfilCliente"
         component={MainTabNavigation}
          options={{
            headerShown: false,
            headerLeft: null,
          headerStyle: {
            backgroundColor: '#12412a',
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

<Stack.Screen
         name="anexarDocumentos"
         component={anexarDocumentos}
          options={{
            headerShown: false,
          headerStyle: {
            backgroundColor: '#12412a',
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

<Stack.Screen
         name="definir"
         component={Definir}
          options={{
            headerShown: false,
          headerStyle: {
            backgroundColor: '#12412a',
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />

<Stack.Screen
         name="act"
         component={ACTE}
          options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />


<Stack.Screen
         name="imovelNovo"
         component={imovelNovo}
          options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#202120',
          
          },
          headerTintColor: '#e9ebea',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:30,
            
          },
        }} />


        
  
       </Stack.Navigator>
   
    </NavigationContainer>
    </Provider>
  );
      }
}