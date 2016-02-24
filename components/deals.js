import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
import { createContainer, range } from 'refar'
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  View
} =React;
import DealCard from './dealCard'
class Deals extends Component{
	state={};
	render(){
		// console.log(this.props.featuredDeals,'there')
		return (
		<View style={{flex:1,backgroundColor:'rgb(240,240,240)'}}>
			<ScrollView style={{flex:1}}>
						<DealCard navigator={this.props.navigator} />
						<DealCard navigator={this.props.navigator} />
						<DealCard navigator={this.props.navigator} />
						<DealCard navigator={this.props.navigator} />
						<DealCard navigator={this.props.navigator} />
						<DealCard navigator={this.props.navigator} />
					</ScrollView>
		</View>
			)
	}

};
Object.assign(Deals.prototype, TimerMixin);

export default createContainer(Deals,{
	fragments() {
		return {
			'featuredDeals': {
				...range({ from: 0, to: 9 }, {
					title: null,
					id: null,
					image: null
				})
			}
		}
	},
	interactions(model, intents) {
		return {}
	}
})