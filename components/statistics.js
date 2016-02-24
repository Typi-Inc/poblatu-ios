import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  View
} =React;
export default class Statistics extends Component{
	state={};
	render(){
		return (

			<View style={{flexDirection:'row',...center,margin:5*k,marginBottom:2}}>
			
				<View style={{flexDirection:'row',marginLeft:3*k,marginRight:4*k,...center}}>
					<Image style={{opacity:0.8,height:14*k,width:14*k,marginRight:3*k}} source={{uri:'smallCart',isStatic:true}}/>
					<Text>18</Text>
				</View>
				<View style={{flexDirection:'row',marginLeft:3*k,marginRight:4*k,...center}}>
					<Image style={{opacity:0.8,height:11*k,width:13*k,marginRight:3*k}} source={{uri:'comment',isStatic:true}}/>
					<Text>40</Text>
				</View>
				<View style={{flexDirection:'row',marginLeft:3*k,marginRight:4*k,...center}}>
					<Image style={{opacity:0.8,height:11*k,width:13*k,marginRight:3*k}} source={{uri:'smallLike',isStatic:true}}/>
					<Text>110</Text>
				</View>

			</View>

			)
	}

};
Object.assign(Statistics.prototype, TimerMixin);
	// <View style={{flexDirection:'row',marginLeft:3*k,marginRight:4*k,...center}}>
	// 				<Image style={{opacity:0.8,height:12*k,width:12*k,marginRight:3*k}} source={{uri:'share',isStatic:true}}/>
	// 				<Text>12</Text>
	// 			</View>