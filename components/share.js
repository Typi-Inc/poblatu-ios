import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableWithoutFeedback,
  Text,
  Image,
  View,
  LayoutAnimation,
} =React;
import {fast } from './animations'
export default class Share extends Component{
	state={};
	render(){
		return (

			<TouchableWithoutFeedback >
				<View style={{...center,height:45*k,width:45*k,backgroundColor:'transparent'}}>
				<Image source={{uri:'share',isStatic:true}} 
				style={{height:22,width:12}}/>
				</View>
			</TouchableWithoutFeedback>

			)
	}

};
Object.assign(Share.prototype, TimerMixin);