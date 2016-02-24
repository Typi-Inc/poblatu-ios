import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  View
} =React;
import Statistics from './statistics'
import Like from './like'
import AuthorName from './authorName'
export default class DealCard extends Component{
	state={};
	static defaultProps={isOpen:false};
	goToDeal(){
		if(this.props.isOpen) return
		this.props.navigator.push({name:'deal'})
	}
	render(){
		return (
				<View style={{flex:1,marginTop:9*k,paddingTop:this.props.isOpen?0:7*k,paddingBottom:this.props.isOpen?0:7*k,backgroundColor:'white',borderWidth:.5,borderRightWidth:0,borderBottomWidth:this.props.isOpen?0:.5,borderLeftWidth:0,width:320*k,borderColor:'rgb(215,215,215)'}}>
					
						{this.props.isOpen?<View/>:<TouchableWithoutFeedback onPress={this.goToDeal.bind(this)}>
								<View style={{flexDirection:'row',justifyContent:'space-between'}}>
									<AuthorName/>
									<Like/>

								</View>
							</TouchableWithoutFeedback>
						}
					<ScrollView //showsHorizontalIndicator={false}
						style={{backgroundColor:'gray'}} showsHorizontalScrollIndicator={false}
						horizontal={true} pagingEnabled={true}
						>

						<Image style={s.bigSquareImage} source={{uri:'http://simplykellydesigns.com/blog/wp-content/uploads/2014/03/SimplyKellyDesigns_PersimmonRosesSquare_WEB-600x600.jpg'}}/>
						<Image style={s.bigSquareImage} source={{uri:'http://cache4.asset-cache.net/gc/155439411-beautiful-bouquet-of-flowers-in-soft-colours-gettyimages.jpg?v=1&c=IWSAsset&k=2&d=6BQooCBkzuDcJGJ%2B7%2BBXgo3vreHOpbnXrrKcCYJdj36jMxb8nm9mPVaYfSqmvXr8'}}/>
						<Image style={s.bigSquareImage} source={{uri:'http://simplykellydesigns.com/blog/wp-content/uploads/2014/03/SimplyKellyDesigns_PersimmonRosesSquare_WEB-600x600.jpg'}}/>
						
					</ScrollView>
					<TouchableWithoutFeedback onPress={this.goToDeal.bind(this)}>
						<View style={{flexDirection:'row',}}>
							<View style={{flex:3,alignItems:'flex-start'}}>
								<Text style={[s.titleText]}>Голландские розы  </Text>
								
								<Statistics/>

							</View>
							<Text style={[{flex:1,},s.priceText]}>1800 тг</Text>
						</View>
					</TouchableWithoutFeedback>

				</View>

			)
	}

};
Object.assign(DealCard.prototype, TimerMixin);