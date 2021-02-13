import React,{useEffect} from 'react';
import { View,Text,TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux';
import database from '@react-native-firebase/database';
import base64 from 'react-native-base64';
import  firebase from "firebase";
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';





const styles = StyleSheet.create({
   input:{
      fontSize:20,
      height:40,
      
   }
 })


 

 
 

export default Cadastro = ({ navigation }) => {
   
const dispatch = useDispatch();
const usuario = useSelector( state => state.cadastro )


cadastraUsuario = () => {
 

   const  { nome,cpf,rg,endereço,email,telefone,crea,senha } = usuario
 
  
                      auth().createUserWithEmailAndPassword(email,senha)
                         .then(user =>{
                           const email64 = base64.encode(email)
                           database().ref(`usuario/profissional/${email64}`)
                           .set({nome,cpf,rg,endereço,email,telefone,crea})
                           .then(() => sucess());
                         } )
                          .catch(error => alert(error));
  
    sucess = () => {     
      auth().signInWithEmailAndPassword(email,senha)
      .then(() => navigation.navigate('PerfilProfissional'))
   }
   navigation.navigate('preloadCadastro')
  }

  
   


useEffect(()=>{
 
},[])



function textInputNome (texto) {
   dispatch({ type:'input_Nome', nome:texto })
}

function textInputCpf (texto) {
   dispatch({ type:'input_Cpf', cpf:texto })
}

function textInputRg (texto) {
   dispatch({ type:'input_Rg', rg:texto })
}

function textInputEndereço (texto) {
   dispatch({ type:'input_Endereço', endereço:texto })
}

function textInputEmail (texto) {
   dispatch({ type:'input_Email', email:texto })
}

function textInputTelefone (texto) {
   dispatch({ type:'input_Telefone', telefone:texto })
}

function textInputCrea (texto) {
   dispatch({ type:'input_Crea', crea:texto })
}

function textInputSenha (texto) {
   dispatch({ type:'input_Senha', senha:texto })
}



console.log(usuario)
    return(
     
          <View style={{flex:3,backgroundColor:"#15312c"}}>
             
           <TextInput value={usuario.nome} placeholderTextColor='#adcbbc' onChangeText={texto => textInputNome(texto) } styles={styles.input} placeholder='Nome Completo' />
           <TextInput value={usuario.cpf} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCpf(texto)} styles={styles.input} placeholder='CPF'/>
           <TextInput value={usuario.rg} placeholderTextColor='#adcbbc' onChangeText={texto => textInputRg (texto)} styles={styles.input} placeholder='RG'/>
           <TextInput value={usuario.endereço} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEndereço (texto)} styles={styles.input} placeholder='Endereço'/>
           <TextInput value={usuario.email} placeholderTextColor='#adcbbc' onChangeText={texto => textInputEmail(texto)} styles={styles.input} placeholder='E-mail'/>
           <TextInput value={usuario.telefone} placeholderTextColor='#adcbbc' onChangeText={texto => textInputTelefone (texto)} styles={styles.input} placeholder='Telefone'/>
           <TextInput value={usuario.crea} placeholderTextColor='#adcbbc' onChangeText={texto => textInputCrea (texto)} styles={styles.input} placeholder='CREA/CAU'/>
           <TextInput value={usuario.senha} placeholderTextColor='#adcbbc' onChangeText={texto => textInputSenha (texto)} styles={styles.input} placeholder='Senha'/>

           <View style={{flex:1,alignItems:'center',justifyContent:'center' }} >
           <TouchableOpacity  onPress={ () => cadastraUsuario()} style={{alignItems:'center',justifyContent:'center',height:'25%',width:'60%', backgroundColor:'#3b7156',borderRadius:50}} >
                      <Text style={{fontSize:23,fontWeight:'bold'}}>Cadastrar</Text>
         </TouchableOpacity>
         </View>

            </View> 
        
    )
}