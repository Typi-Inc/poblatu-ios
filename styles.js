'use strict';
import React, {
  StyleSheet,
} from 'react-native';
let Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');
const k=windowSize.width/320
const h=windowSize.height/568
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabTitle:{
    fontWeight:'600'
  },
  screenTitle:{
    fontSize:18,fontWeight:'600',color:'#0679a2'
  },
  tabTitleSelected:{
    color:'white',fontWeight:'600'
  },
  bigSquareImage:{
    width:320*k,height:320*k,alignSelf:'center'
  },
  thumbnail:{
    height:45*k,width:45*k,margin:7*k,marginTop:0
  },
  nameText:{
    color:'#0679a2',
    fontWeight:'500',
    fontSize:15
  },
  grayText:{
    color:'rgb(130,130,130)',
    fontSize:13,
    fontWeight:'500'

  },
  whiteButtonText:{
      color:'white',
      fontSize:14,
      fontWeight:'500'
  },
  blueBox:{
    margin:5*k,
    padding:12*k,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0679a2',
    borderRadius:4*k,
  },
  blueText:{
    color:'#0679a2',
    fontSize:13,
    fontWeight:'500'
  },
  rightButtonText:{
    color:'#0679a2',
    marginRight:7*k,
    fontSize:15,
    fontWeight:'500',
    marginTop:3*k
  },
  titleText:{
    fontSize:19,color:'rgb(70,70,70)',fontWeight:'normal',margin:7*k,marginBottom:3,fontFamily:'PT Serif'
  
  },
  priceText:{
    fontSize:18, fontFamily:'PT Serif',alignSelf:'center'
  }


});
export default styles