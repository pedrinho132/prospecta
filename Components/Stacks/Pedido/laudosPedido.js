import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default class LaudoPedido extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:'https://2.bp.blogspot.com/-Pox9o5WgE24/VgxK7kCpggI/AAAAAAAAEQw/9W3OAas5z4U/s1600/cancelamento-de-escritura-publica.jpg'}} />
        </View>
        <View style={styles.slide2}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3F-1tSWdH0PdONPGujEDlOtY3Yk1KVTD_g&usqp=CAU'}} />
        </View>
        <View style={styles.slide3}>
        <Image style={{flex:1,height:'100%',width:'100%'}} source={{uri:'https://1.bp.blogspot.com/-InWQsvc2Aq8/X947dHhG3cI/AAAAAAAAQwg/_xgVfszhlkQDdzW1sYPF6bw98YNzn351QCLcBGAsYHQ/s549/132031895_3518788011541337_1744313455824401548_n.jpg'}} />
        </View>
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)