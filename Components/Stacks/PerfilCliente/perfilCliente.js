import React,{ useState, useEffect } from 'react';
import { View,Text,TouchableHighlight,FlatList,Image,Button,TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch, } from 'react-redux'
import base64 from 'react-native-base64';
import  auth from '@react-native-firebase/auth';
import '@react-native-firebase/app';

export default PerfilCliente = ({ route,navigation }) => {

const dispatch = useDispatch();

const [ pedidos, setPedidos ] = useState([]);
const [fetchList,setFetchList ] = useState(false);
const dadosUser = useSelector( state => state.dadosUser )
const [pedido,setPedido]= useState(false);

useEffect(()=>{

    auth().onAuthStateChanged(function(user) {
        if (user) {
            var li = []
            const email = user.email
            const email64 = base64.encode(email)
            database().ref(`/pedidos/${email64}`).on('value', (snapshot) =>{     
                setPedidos(snapshot.val())
            });
        } else {
            // No user is signed in.
            console.log('There is no logged in user');
        }
    });

    

},[]);

 function sair  ()  {
    auth()
    .signOut()
    .then(() => deslogar() );
    
function deslogar(){
    navigation.navigate('Login')
    alert('Usuario Deslogado!!') 
}

   }

   function ll  ()  {

       if(pedido == false){
           return(
               <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
           <Text>Nenhum Imovel a venda...</Text>
           </View>
           )
       }
       return(
           <View style={{flex:1}}>

<View style={{flex:1,flexDirection:'row'}}>

<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
 <Image style={{height:'60%',width:'60%',borderRadius:60}} source={{uri:pedidos.photo}} />
 <Text style={{marginTop:10}} >{ pedidos.nome }</Text>
</View>

<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text style={{}} >Resumo:</Text>
      <Text style={{fontSize:17,fontWeight:'bold'}}>{ pedidos.descricao }</Text>
  </View>

</View>


<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text  onPress={()=> navigation.navigate('Pedido')} style={{color:'#2ca86a',fontSize:23,fontWeight:'bold'}}>Acompanhar Pedido</Text>
</View>


           </View>
           )
       
       
   }


    return(
    <View style={{flex:1,backgroundColor:'#113d35'}}>
  
            
   <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}} >

   <Text style={{fontWeight:'bold',fontSize:20,color:'#278473'}} >Prospecta</Text>
              


       </View>          


    <Text style={{color:'#113d35',fontSize:17,fontWeight:'bold'}} >Ola </Text>
                         
               
<View style={{flex:3,alignItems:'center',justifyContent:'center',}}>  
<TouchableOpacity  onPress={ () => navigation.navigate('definir') } style={{ alignItems:'center',justifyContent:'center',height:'47%',width:'70%',borderWidth:3,borderColor:'#2ca86a',borderRadius:40,backgroundColor:'white' }}  >

    <Text style={{color:'#113d35',fontSize:17,fontWeight:'bold'}} >Solicitar Vistoria</Text>
</TouchableOpacity>   


</View>





<View style={{flex:9}}>
    <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>
<Text style={{color:'#2ca86a',fontWeight:'400',fontSize:25,margin:10}} >Anuncios</Text>
</View>

<View style={{flex:4,backgroundColor:'white',borderTopLeftRadius:30,borderTopRightRadius:30}}>
      {
         ll()
      }
</View>
</View>                 
            
          </View>
      
        
    )
}

