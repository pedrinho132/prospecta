import React from 'react';
import { View,Text,ScrollView,TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux'
import base64 from 'react-native-base64'
import firebase from "firebase";
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';




const styles = StyleSheet.create({
   input:{
      fontSize:20,
      height:40,
      width:70
      
   }
 })

 

export default autenticarLogin = ({ navigation }) => {
   
const dispatch = useDispatch();
const usuario = useSelector( state => state.autenticacao );



 async function loginButton  () {
    try{
       const email = usuario.email;
       const senha = usuario.senha;
              await auth().signInWithEmailAndPassword(email,senha)
                    .then(val => {
                
                 const emailUser = val.user._user.email
                 const email64 = base64.encode(emailUser)                          
               })
               .catch(error => console.log(error));
    }catch(error){
       console.log(error)
    }
   }

 

function textInputEmail (texto) {
   dispatch({ type:'input_EmailLogin', email:texto })
}


function textInputSenha  (texto)  {
   dispatch({ type:'input_SenhaLogin', senha:texto })
}

    return(
     <View style={{flex:1,backgroundColor:"#15312c"}}>
    
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:35,color:'#278473'}} >Prospecta</Text>
                  <Text style={{fontWeight:'200',fontSize:25,color:'#e2eeee',marginLeft:'35%'}} >Avalie</Text>
               </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

          
             
        
           <TextInput value={usuario.email} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEmail(texto)} styles={styles.input} placeholder='E-mail'/>
           <TextInput value={usuario.senha} placeholderTextColor='#adcbbc' onChangeText={texto => textInputSenha (texto)} styles={styles.input} placeholder='Senha'/>
          </View>

           <View style={{flex:2,alignItems:'center',justifyContent:'center' }} >
           <TouchableOpacity onPress={() => loginButton() } style={{ alignItems:'center',justifyContent:'center',height:'20%',width:'70%',borderWidth:2,borderColor:'white',borderRadius:40,backgroundColor:'white' }}  >
                      <Text style={{fontSize:23,fontWeight:'bold',color:'#15312c'}}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={ () => navigation.navigate('Cadastro')} style={{marginTop:20}}>
         <Text  style={{marginTop:20,fontSize:14,fontWeight:'bold',color:'white'}}>Ainda não é cadastrado? Clique aqui</Text>
         </TouchableOpacity>
         </View>

            </View> 

    )
}
