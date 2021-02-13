import  React, { Component,useState } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Image,TextInput,ScrollViewComponent} from 'react-native';


const styles = StyleSheet.create({
  })




 export default ACTE = ({ route,navigation }) => {

  const [ endereco, setEndereco] = useState();

  function inputEndereco(texto){
   setEndereco(texto)
  }
  
    function gerar(){
      alert('Arquivos do imovel anexado!')
      navigation.naviate('perfilCliente')
    }

    return (
      
        
       
            <View style={{flex:1,marginHorizontal:10}}>
          <Text style={{fontSize:20,fontWeight:'bold'}} >Dados para registro do imóvel</Text>
          <TextInput placeholder='Digite o endereço completo' onChangeText={texto  => inputEndereco(texto)} value={endereco} />
          <Text style={{fontSize:16,fontWeight:'300',marginTop:20}} >Certidao de relatorios de ONUS e AÇÕES (Documento com validade de 30 dias para ser requisitado no cartorio referente ao imovel)*</Text>
                    <View style={{height:'4%',width:'45%',alignItems:'center',marginTop:7,justifyContent:'center',borderRadius:40,backgroundColor:'gray',opacity:0.6}}  >
                      <Text onPress={()=>navigation.navigate('cameraPedido')} style={{fontSize:13}}>Enviar Documento</Text>
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
            
            
                    <Text style={{fontSize:16,fontWeight:'300',marginTop:15}} >Projeto Legal( apresentar tambem o projeto arquitetônico caso a prefeitura analise/aprove projeto simplicado ) </Text>
                    <View style={{height:'4%',width:'45%',alignItems:'center',marginTop:7,justifyContent:'center',borderRadius:40,backgroundColor:'gray',opacity:0.6}}  >
                      <Text  onPress={()=>alert('Documento Anexado')} style={{fontSize:13}}>Enviar Documento</Text>
                    </View>

                    <Text style={{fontSize:16,fontWeight:'300',marginTop:15}} >Planilha de financiamento de unidade isolada (PFUI) devidamente preenchida e assinada pelo Responsavel Tecnico  </Text>
                    <View style={{height:'4%',width:'45%',alignItems:'center',marginTop:7,justifyContent:'center',borderRadius:40,backgroundColor:'gray',opacity:0.6}}  >
                      <Text  onPress={()=>alert('Documento Anexado')} style={{fontSize:13}}>Enviar Documento</Text>
                    </View>
                    
                    <Text style={{fontSize:16,fontWeight:'300',marginTop:15}} > Projetos assinados (Elétrico,Hidráulico,Sanitario) </Text>
                    <View style={{height:'4%',width:'45%',alignItems:'center',marginTop:7,justifyContent:'center',borderRadius:40,backgroundColor:'gray',opacity:0.6}}  >
                      <Text  onPress={()=>alert('Documento Anexado')} style={{fontSize:13}}>Enviar Documento</Text>
                    </View>

                    <View style={{height:'10%', width:'100%',alignItems:'center',marginTop:40,justifyContent:'center'}}>
                              <TouchableHighlight onPress={()=>gerar()} style={{height:'100%',borderWidth:2,borderColor:'#113d35',borderRadius:40,width:'70%',alignItems:'center',justifyContent:'center'}}>
                                <Text style={{color:'#113d35',fontWeight:'bold',fontSize:20}}>Gerar</Text>
                              </TouchableHighlight>
                    </View>
                    </View>
                  
                   
           
           
    )
}
  


