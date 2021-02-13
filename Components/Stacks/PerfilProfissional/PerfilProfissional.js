import React,{useState,useEffect} from 'react';
import { View,Text, TouchableOpacity, StyleSheet, Image,ScrollView, Linking,ImageBackground} from 'react-native';
import ActionButton from 'react-native-action-button';
import {  AirbnbRating } from 'react-native-ratings';
import database from '@react-native-firebase/database';
import base64 from 'react-native-base64';
import { useSelector, useDispatch, } from 'react-redux';
import auth from '@react-native-firebase/auth';
import Geolocation from '@react-native-community/geolocation';
import firebase from 'firebase';
import "@react-native-firebase/app"

const styles = StyleSheet.create({
    linearGradient: {
    flex:1
    },
  })

export default PerfilProfissional = ({ route, navigation }) => { 
  const [userDate, setUserDate] = useState([]);
  const [ fetchPedidos, setPedidos] = useState();
  const [latitude,setLatitude]= useState();
  const [longitude,setLongitude] = useState();
  const pedido = useSelector( state => state.pedido )
  const dispatch = useDispatch();



/*
  function fetch (){
   var emailUser = firebase.auth().currentUser.email;
   const email64 = base64.encode(emailUser);


   firebase.database()
      .ref('usuarios/profissional/'+email64)
      .on('value', snapshot => {
            setUserDate(snapshot.val())
      });
   
  }
  */

   async function coursesIbape(){
      try{
   
      const url = 'http://www.ibapemaranhao.com.br/cursos-e-eventos/'
        await Linking.openURL(url)
      }catch(error){
         alert(error)
      }

   }

   useEffect(()=>{

     

      database().ref('/pedidos').on('value', (snapshot) =>{
         var li = []
         snapshot.forEach((child)=>{
          li.push({
           key: child.val().id,
           latitude:child.val().latitude,
           longitude: child.val().longitude,
           descricao: child.val().descricao
         });
         dispatch({ type:'fetch_List', payload:li })
       })
     
     });


     

     auth().onAuthStateChanged(function(user) {
      if (user) {
          console.log('This is the user: ', user)
      } else {
          // No user is signed in.
          console.log('There is no logged in user');
      }
  });

   
   },[fetchLocation()]);

   function fetchLocation (){
    Geolocation.getCurrentPosition(info => {
      const position = info.coords
     dispatch({ type:'latitude', payload:position.latitude });
     dispatch({ type:'longitude', payload:position.longitude })
    });
   }


   function sair ()  {
    auth()
    .signOut()
    .then(() => { navigation.navigate('Login') });
   }

    return(
         

     
  <View style={{flex:1,}}>
   
                       <ImageBackground source={require('../../assets/iconProspecta.jpeg')} style={{opacity:0.8,flex:2,flexDirection:'row',backgroundColor:'#13332d',borderColor:'#aed5c1'}}>
                         <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}} >
                                  <Text style={{fontWeight:'bold',fontSize:20,color:'white'}} >Ganhos: R$ 0</Text>
                        </View>
                  </ImageBackground>


              <View style={{flex:1}}>
                



                 < View style={{flex:1,backgroundColor:'#1a3a2a'}}>
                          <TouchableOpacity onPress={()=>navigation.navigate('Mapa')} style={{flex:1,backgroundColor:'#bfc1c0',flexDirection:'row',alignItems:'center',justifyContent:'center',borderTopRightRadius:30,borderTopLeftRadius:30}}>
                             <Text  style={{fontWeight:'bold',fontSize:17}} >Mapa</Text>
                             </TouchableOpacity>

                             <TouchableOpacity onPress={()=>coursesIbape()} style={{flex:1,borderTopWidth:1,borderColor:'white',backgroundColor:'#bfc1c0',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                             <Text style={{fontWeight:'bold',fontSize:17}} >Profissionalize-se</Text>
                             </TouchableOpacity>

                             <View style={{flex:1,borderTopWidth:1,borderColor:'white',backgroundColor:'#bfc1c0',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                             <Text style={{fontWeight:'bold',fontSize:17}} >Feedback Clientes</Text>
                             </View>

                             <View style={{flex:1,borderTopWidth:1,borderColor:'white',backgroundColor:'#bfc1c0',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                             <Text style={{fontWeight:'bold',fontSize:17}} >Retirada de Fundos</Text>
                             </View>

                             <TouchableOpacity onPress={()=> sair()} style={{flex:1,borderTopWidth:1,borderColor:'white',backgroundColor:'#bfc1c0',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                             <Text style={{fontWeight:'bold',fontSize:17}} >Perfil</Text>
                             </TouchableOpacity>
                             
                    </View>

                   
              </View>
                     

                         

                
                           

                      
                                                       

                         
                 
            

                     


</View>
        
    )
}