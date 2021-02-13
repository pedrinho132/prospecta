import  React, { Component,useState,useEffect } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Image,TouchableOpacity} from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import base64 from 'react-native-base64'
import  auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import '@react-native-firebase/app';
import { useSelector, useDispatch, } from 'react-redux'
import { set } from 'react-native-reanimated';



const styles = StyleSheet.create({
  linearGradient: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})


   


export default Login = ({  navigation }) => { 

  const dispatch = useDispatch(); 
 
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  function onAuthStateChanged(user) {
    setUser(user)
    if (initializing) setInitializing(false);
  }


  att = () => {
  GoogleSignin.configure({
    scopes:['email'],
    webClientId: "457496427322-i8jd5b1slnf517to6h5iogtkj94qoq14.apps.googleusercontent.com",
  })
}

  
useEffect(() => {
  GoogleSignin.configure({
    scopes:['email'],
    webClientId: "457496427322-i8jd5b1slnf517to6h5iogtkj94qoq14.apps.googleusercontent.com",
  })


  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber; // unsubscribe on unmount
}, [att()]);




if (initializing) return null;

if (!user) {


  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential)
                   .then(usuario=> {
                      const userData = usuario.user._user                  
                              
                               dispatch({ type:'emailInfo', payload:userData.email }) ; 

                  });
    } catch (error){
      console.log(error)
    }

    
  }
  
  
  
  
  
    return (
      
   
      <View style={{flex:1,backgroundColor:'#113d35'}}>
              
       <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
          <View style={{height:'30%',width:'30%',marginTop:'30%',alignItems:'center',justifyContent:'center'}} >
          
          </View>
              
          <Text style={{fontWeight:'bold',fontSize:30,color:'#278473'}} >Prospecta</Text>
              <Text style={{fontWeight:'200',fontSize:25,color:'#e2eeee',marginLeft:'35%'}} >Avalie</Text>

              <TouchableOpacity   onPress={ ()=> navigation.navigate('autenticarLogin') } style={{alignItems:'center',justifyContent:'center',height:'25%',marginTop:20,width:'60%',backgroundColor:'white',borderRadius:40,flexDirection:'row'}} >
                        <Text style={{fontSize:17,color:'black',fontWeight:'bold'}} >Engenheiro</Text>

                </TouchableOpacity>
           

              </View>
          <View style={{flex:3,alignItems:'center',justifyContent:'center'}} >

           

             

              <TouchableOpacity   onPress={ ()=> _signIn() } style={{height:'15%',marginTop:20,width:'60%',backgroundColor:'white',borderRadius:40,flexDirection:'row'}} >
                   <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}} >
                     <View style={{marginLeft:26,width:60,height:60}} >
                                  <Image style={{flex:1}} source={{uri:'https://i1.wp.com/www.androidawareness.com/wp-content/uploads/2018/10/google-icon.png?fit=500%2C500'}} />
                                          </View>
                     </View>

                   <View style={{flex:3,alignItems:'center',justifyContent:'center'}}>

                      <Text style={{fontSize:17,fontWeight:'bold',marginRight:40}} > Login Gmail</Text>
                     </View>
                    

                </TouchableOpacity>
            

          </View>
           
          <View style={{flex:1,alignItems:'flex-start',justifyContent:'center'}}>

          <Image style={{opacity:0.3,height:'75%',width:'25%',margin:30,borderRadius:60,borderWidth:2,borderColor:'black'}}  source={{uri:'https://media-exp1.licdn.com/dms/image/C4D0BAQGFptH4gwsXYQ/company-logo_200_200/0/1533058428802?e=2159024400&v=beta&t=y9p1TcPa0H33tkMk3uaFOQ4DWF7iWkrQCGB3SqyaeKo'}} />
          </View>
      </View>

  );
}

if (user.emailVerified == true){
  return(
    <View>
      {navigation.navigate('perfilCliente')}
    </View>
  )
  
}

if (!user.emailVerified){
  return(
    <View>
      {navigation.navigate('PerfilProfissional')}
    </View>
  )
  
}
     


   
  }


