import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Button, Platform, PermissionsAndroid } from 'react-native';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch, } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';

/*  {
fetchPedidos.map(element => {
  return(
  <Text key={element.key} style={{color:'black',fontSize:20}} >{element.latitude}</Text>
  )
})
       } */

const App = ({ navigation }) => {
     
const dispatch = useDispatch();
const pedidos = useSelector( state => state.pedido.list );
const userDados = useSelector( state => state.dadosUser );   

 useEffect(()=>{
    console.log(pedidos)
 },[])

  return (
 
    <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex:1}}
        showsUserLocation={true}
        initialRegion={{
          latitude: userDados.latitude,
          longitude: userDados.longitude,
          latitudeDelta: 0.0150,
          longitudeDelta: 0.0150,
        }}
      >

{
        pedidos.map((marker,index) => (
             
              <Marker
                key={index}
                coordinate={{
                  latitude:marker.latitude,
                  longitude:marker.longitude
                }}
                description={marker.descriçao}
              />
        ))
      }
     

</MapView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

