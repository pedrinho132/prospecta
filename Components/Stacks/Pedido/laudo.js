import  React, { Component,useState } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Image,TextInput,ScrollViewComponent} from 'react-native';


const styles = StyleSheet.create({
  })


 export default Laudo = ({ route,navigation }) => {
        
    return (
      
        
       
            <View style={{flex:1}}>

                    <View style={{flex:1}}>
                            <Text style={{fontSize:25,fontWeight:'bold'}} >Vistorias</Text>
                    <TouchableHighlight  onPress={()=>navigation.navigate('Pedido')} style={{marginTop:10,height:'20%',width:'100%',alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'black'}} >
                              <Text>Pedido #891999</Text>
                    </TouchableHighlight>
                    </View>
                    
                    

                    
                    </View>
                  
                   
           
           
    )
}
  


