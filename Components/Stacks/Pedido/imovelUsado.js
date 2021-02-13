
import  React, { Component,useState } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Image,TextInput,ScrollViewComponent} from 'react-native';


 export default ImovelUsado = ({ route,navigation }) => {
  
    function gerar(){
      alert('Arquivos do imovel anexado!')
      navigation.naviate('perfilCliente')
    }

    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center',marginHorizontal:20}}>
            <Text style={{fontSize:23,fontWeight:'bold'}} >Dados Para imovel usado</Text>

<Text style={{fontSize:16,fontWeight:'300',marginTop:20}} >Certidao de relatorios de ONUS e AÇÕES (Documento com validade de 30 dias para ser requisitado no cartorio referente ao imovel)*</Text>
<View style={{height:'4%',width:'45%',alignItems:'center',marginTop:7,justifyContent:'center',borderRadius:40,backgroundColor:'gray',opacity:0.6}}  >
  <Text onPress={()=>alert('Documento Anexado')} style={{fontSize:13}}>Enviar Documento</Text>
</View>

<Text style={{fontSize:16,fontWeight:'300',marginTop:10}} >Certidão de inteiro Teor (Documento com validade de 30 dias para ser requisitado no cartorio referente ao imovel)*</Text>
<View style={{height:'4%',width:'45%',alignItems:'center',marginTop:7,justifyContent:'center',borderRadius:40,backgroundColor:'gray',opacity:0.6}}  >
  <Text onPress={()=>alert('Documento Anexado')} style={{fontSize:13}}>Enviar Documento</Text>
</View>

<Text style={{fontSize:16,fontWeight:'300',marginTop:10}} >Conta de agua ou ortoga da agua (Documento com validade de 30 dias)*</Text>
<View style={{height:'4%',width:'45%',alignItems:'center',marginTop:7,justifyContent:'center',borderRadius:40,backgroundColor:'gray',opacity:0.6}}  >
  <Text onPress={()=>alert('Documento Anexado')} style={{fontSize:13}}>Enviar Documento</Text>
</View>
<Text style={{fontSize:16,fontWeight:'300',marginTop:10}} >Alvará de Construção/ART</Text>
<View style={{height:'4%',width:'45%',alignItems:'center',marginTop:7,justifyContent:'center',borderRadius:40,backgroundColor:'gray',opacity:0.6}}  >
  <Text onPress={()=>alert('Documento Anexado')} style={{fontSize:13}}>Enviar Documento</Text>
</View>

<TouchableHighlight  style={{borderRadius:50,marginTop:20,height:'10%',width:'100%',borderWidth:2,borderColor:'black',alignItems:'center',justifyContent:'center'}}>
         <Text>Solicitar Vistoria</Text>
</TouchableHighlight>

</View>
    )}