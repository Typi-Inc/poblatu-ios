import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
export default class Conditions extends Component{
	state={};
	render(){
		return (

			<View style={s.container}/>

			)
	}

};
Object.assign(Conditions.prototype, TimerMixin);