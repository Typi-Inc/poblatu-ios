import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View,
  Navigator
} =React;
import Tabs from './tabs'
export default class App extends Component{
	state={};

	render(){
		return (
			<View style={{flex:1}}>
				<View style={{height:20}}/>
			<Navigator
				initialRoute={{name:'tabs'}}
				renderScene={this.renderApp.bind(this)}
				

			/>
			</View>


			)
	}

	renderApp(route,navigator){
		return <Tabs/>
	}

};
Object.assign(App.prototype, TimerMixin);