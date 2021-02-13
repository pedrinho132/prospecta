import  React, { Component,useState } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Image,} from 'react-native';


const styles = StyleSheet.create({
  })


 export default Definir = ({ route,navigation }) => {
        
    return (

        <View style={{flex:1}}>

                <TouchableHighlight onPress={()=> navigation.navigate('informarEndereco',{tipo:'act'})} style={{flex:1,justifyContent:"center",alignItems:'center',borderTopWidth:1,borderColor:'black'}} > 
                              <Text>Aquisição/Construção/Terreno</Text>
                </TouchableHighlight>



                <TouchableHighlight onPress={()=> navigation.navigate('informarEndereco',{tipo:'imovelNovo'}) } style={{flex:1,justifyContent:"center",alignItems:'center',borderTopWidth:1,borderColor:'black'}} > 
                <Text>Imovel Novo</Text>
                </TouchableHighlight>





                <TouchableHighlight onPress={()=>navigation.navigate('informarEndereco',{tipo:'imovelUsado'})} style={{flex:1,alignItems:'center',justifyContent:'center',borderTopWidth:1,borderColor:'black'}} > 
                <Text>Imovel Usado</Text>
                </TouchableHighlight>
                    
              </View>
   
    )
}
  


