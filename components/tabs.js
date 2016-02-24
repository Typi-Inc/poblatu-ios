


import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native';
let {
  AppRegistry,
  Component,
  Navigator,
  Text,
  LayoutAnimation,
  TouchableOpacity,
  ScrollView,
  Image,
  View
} =React;
import {openAnimation} from './animations'
var update = React.addons.update
import DealCard from './dealCard'
import Deals from './deals'
import Deal from './deal'
import DealRoute from './dealRoute'
import TabNavigator from 'react-native-tab-navigator'


export default class Tabs extends Component{
	state={height:46,overflow:'visible',selectedTab:'search'};
	static childContextTypes={toggleTabs:React.PropTypes.func,tabsHidden:React.PropTypes.func};
	getChildContext(){
		return {toggleTabs: this.toggleTabs.bind(this),
				tabsHidden:this.tabsHidden.bind(this)
			}
	}
	tabsHidden(){
		return this.state.height===0
	}
	toggleTabs(val){
		// LayoutAnimation.configureNext(openAnimation)
  		this.setState({height:val?0:46,overflow:val?'hidden':'visible'})
  	}
	renderFeatured(route,navigator){
		if(route.name==='featured'){
			return <View style={{flex:1}}><Deals  navigator={navigator}/></View>
		}else if(route.name==='deal'){
			
			return <DealRoute navigator={navigator}/>
		}
	}
	render(){
		// this.navStyle=this.navStyle||{height:0}
		return (

			<TabNavigator 
			    tabBarStyle={{height:this.state.height,overflow:this.state.overflow,backgroundColor:'black'}}
				sceneStyle={{paddingBottom: this.state.height }}
			>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'search'}
					title="Лучшее"
					selectedTitleStyle={s.tabTitleSelected}
					titleStyle={s.tabTitle}
					onPress={() =>this.setState({ selectedTab: 'search' })}
					renderIcon={()=><Image source={{uri:'star',isStatic:true}} style={{height:20,width:20}}/>}
					renderSelectedIcon={()=><Image source={{uri:'startW',isStatic:true}} style={{height:20,width:20}}/>}
				>

					<Navigator ref={el=>this.featureNav=el}
						initialRoute={{name:'featured'}}
						renderScene={this.renderFeatured.bind(this)}
						configureScene={(route,routeStack)=> {		
			            	return Navigator.SceneConfigs.PushFromRight
			            }}
					/>
		

				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'featured'}
					title="Поиск"
					selectedTitleStyle={s.tabTitleSelected}
					titleStyle={s.tabTitle}
					onPress={() =>this.setState({ selectedTab: 'featured' })}
					renderIcon={()=><Image source={{uri:'search',isStatic:true}} style={{height:20,width:20}}/>}
					renderSelectedIcon={()=><Image source={{uri:'searchW',isStatic:true}} style={{height:20,width:20}}/>}

				>
					<View style={{flex:1,backgroundColor:'gray'}}/>


				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'cart'}
					title="Корзина"
					selectedTitleStyle={s.tabTitleSelected}
					titleStyle={s.tabTitle}
					onPress={() =>this.setState({ selectedTab: 'cart' })}
					renderIcon={()=><Image source={{uri:'cart',isStatic:true}} style={{height:20,width:20}}/>}
					renderSelectedIcon={()=><Image source={{uri:'cartW',isStatic:true}} style={{height:20,width:20}}/>}

				>
					<View style={{flex:1,backgroundColor:'blue'}}/>



				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'activity'}
					title="События"
					selectedTitleStyle={s.tabTitleSelected}
					titleStyle={s.tabTitle}
					onPress={() =>this.setState({ selectedTab: 'activity' })}
					renderIcon={()=><Image source={{uri:'activity',isStatic:true}} style={{height:20,width:18}}/>}
					renderSelectedIcon={()=><Image source={{uri:'activityW',isStatic:true}} style={{height:20,width:18}}/>}

				>
					<View style={{flex:1,backgroundColor:'white'}}/>



				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'profile'}
					title="Профиль"
					selectedTitleStyle={s.tabTitleSelected}
					titleStyle={s.tabTitle}
					onPress={() =>this.setState({ selectedTab: 'profile' })}
					renderIcon={()=><Image source={{uri:'profile',isStatic:true}} style={{height:19,width:19}}/>}
					renderSelectedIcon={()=><Image source={{uri:'profileW',isStatic:true}} style={{height:19,width:19}}/>}

				>
					<View style={{flex:1,backgroundColor:'green'}}/>



				</TabNavigator.Item>






			</TabNavigator>

			)
	}

};
Object.assign(Tabs.prototype, TimerMixin);