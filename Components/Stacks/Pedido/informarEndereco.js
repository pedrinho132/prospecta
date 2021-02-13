import React,{useState,useEffect} from 'react';
import { View,Text,TextInput,TouchableHighlight } from 'react-native';
import { useSelector, useDispatch, } from 'react-redux'

export default InformarEndereco = ({route,navigation}) => {
    const [ endereco, setEndereco ] = useState();
    const dispatch = useDispatch();

    function inputEndereco (texto){
        setEndereco(texto)
    }

    const tipo = route.params.tipo

    useEffect(()=>{
         
    },[console.log(tipo)])

    function button(){
        if(!endereco){
            alert('Preencha o campo')
        }

        if(endereco){
            navigation.navigate(`${tipo}`)
        }

        dispatch({ type:'input_endereco', payload:endereco })
        
    }
   return(
    
           <View style={{flex:1}}>
               <View style={{flex:5,alignItems:'center',justifyContent:'center'}} >
                <Text  >Nos informe seu endereço completo </Text>
                <TextInput color onChangeText={texto => inputEndereco(texto)} value={endereco} placeholder='Digite seu endereço...' />
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <TouchableHighlight onPress={()=> button()} style={{height:'50%',borderRadius:50, width:'60%',marginTop:20,alignItems:'center',borderWidth:2,borderColor:'#113d35',justifyContent:'center'}} >
                 <Text style={{fontWeight:'bold',color:'#113d35'}}> Continuar </Text>
                 </TouchableHighlight>
                </View>
           </View>

           
   )
}