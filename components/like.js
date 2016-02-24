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
export default class Like extends Component{
	state={liked:false};
	render(){
		return (

			<TouchableWithoutFeedback  onPress={()=>{
				LayoutAnimation.configureNext(fast)
				this.setState({liked:!this.state.liked})}}>
				<View style={{...center,height:45*k,width:45*k,backgroundColor:'transparent'}}>
				<Image source={{uri:this.state.liked?'likeB':'like',isStatic:true}} 
				style={{height:23,width:28,marginRight:7*k}}/>
				</View>
			</TouchableWithoutFeedback>

			)
	}

};
Object.assign(Like.prototype, TimerMixin);