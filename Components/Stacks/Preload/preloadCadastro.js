import  React, { Component,useState } from 'react';
import {  View, ActivityIndicator,Text,TouchableOpacity } from 'react-native';
import  auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';

  


export default  Preloadcadastro = ({ navigation }) => {

    
    sair = () => {
        auth()
        .signOut()
        .then(() => deslogar() );
        
    function deslogar(){
        navigation.navigate('Login')
        alert('Usuario Deslogado!!') 
    }
    
       }
        
    return (

        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <TouchableOpacity onPress={()=>sair()} style={{width:'100%',height:'10%',alignItems:'center',justifyContent:'center',backgroundColor:'grey',opacity:0.7}}>
                         <Text  style={{color:'black',fontSize:16}} >Sair</Text>
                     </TouchableOpacity>
              </View>
   
    )
}
