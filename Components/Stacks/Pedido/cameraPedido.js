import  React, { Component,useState } from 'react';
import { StyleSheet, View, Text,TouchableHighlight,Image,TextInput,ScrollViewComponent} from 'react-native';
import { RNCamera } from 'react-native-camera';


const styles = StyleSheet.create({
    preview:{
        flex:1
    }
  })




 export default CameraScreen = ({ route,navigation }) => {

    return (
      
        
        <RNCamera
        ref={camera => { this.camera = camera }}
        style = {styles.preview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
      />
                  
                   
           
           
    )
}
  

