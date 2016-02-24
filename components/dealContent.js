


import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  SegmentedControlIOS,
  Text,
  View
} =React;
import AuthorTab from './authorTab'
export default class App extends Component{
	state={num:0};
	changeNum(num){
		this.setState({num:num})
	}
	render(){
		let buy=<Text>buy</Text>
		let author=<Text>author</Text>
		let comments=<Text>comments</Text>
		let tab;
		if(this.state.num===0){
			tab=buy;
		}else if(this.state.num===1){
			tab=<AuthorTab navigator={this.props.navigator}/>;
		}else{
			tab=comments;
		}
		return (

			<View style={{flex:1,padding:7*k}}>
				

				{tab}



			</View>

			)
	}

};
Object.assign(App.prototype, TimerMixin);	   