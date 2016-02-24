import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Navigator,
  Image
} =React;
import Deal from './deal'
import Like from './like'
import Share from './share'
import Conditions from './conditions'
import Ask from './ask'
import MapScreen from './mapScreen'
import dismissKeyboard from 'dismissKeyboard'
let NavigationBarRouteMapper={
		LeftButton(route, navigator, index, navState){
			// console.log(navigator)
			if(route.name==='deal'){

				return <TouchableOpacity style={{height:45*k,width:45*k}} onPress={()=>{

					navigator.parentNavigator.pop()
				}}>

					<Image source={{uri:'arrowBlue',isStatic:true}} style={{margin:10*k,height:19,width:11,marginTop:0}}/>

				</TouchableOpacity>
			}else{
				return <TouchableOpacity style={{height:45*k,width:45*k}} onPress={()=>{
					route.toggleTabs(false)
					dismissKeyboard()
					navigator.pop()}}>

					<Image source={{uri:'arrowBlue',isStatic:true}} style={{margin:10*k,height:19,width:11,marginTop:0}}/>

				</TouchableOpacity>
			}

			return null
		},
		RightButton(route, navigator, index, navState){
			if(route.name==='deal'){
				return <View style={{flexDirection:'row'}}>
					<View style={{bottom:11,}}>
						<Share/>
					</View>

					<View style={{bottom:11}}>
						<Like/>
					</View>

				</View>
			}else if (route.name==='ask'){
				return <TouchableWithoutFeedback onPress={()=>navigator.pop()}>
					<Text style={s.rightButtonText}>Отправить</Text>
					</TouchableWithoutFeedback>
			}
			// else if(route.name==='mapScreen'){
			// 	return <TouchableWithoutFeedback onPress={()=>console.log('me here')} >
			// 				<Text style={{color:'#0679a2',marginRight:10*k,fontWeight:'500'}}>Где я?</Text>
			// 			</TouchableWithoutFeedback>
			// }
			return null
		},
		Title(route, navigator, index, navState){
			if(route.title){
				return <Text style={s.screenTitle}>{route.title}</Text>
			}
			return null
		}

	}
export default class DealRoute extends Component{
	static contextTypes={toggleTabs:React.PropTypes.func,tabsHidden:React.PropTypes.func};
	state={};
	componentDidMount(){
		this.subscription=this.nav.navigationContext.addListener('willfocus', ()=>{
			if(this.nav.navigationContext._currentRoute.name==='deal' && this.context.tabsHidden()){
				this.context.toggleTabs(false)
			}
		})
	}
	componentWillUnmount(){
		this.subscription.remove()
	}
	renderDeal(route,navigator){

		
		if(route.name==='deal'){
			
			return <Deal navigator={navigator}/>
		}else if (route.name==='conditions'){
			return <Conditions navigator={navigator}/>

		}else if (route.name==='ask'){
			return <Ask navigator={navigator}/>

		}else if (route.name==='mapScreen'){
			return <MapScreen navigator={navigator}/>

		}
	}
	render(){
		return (

			<Navigator 
				style={{paddingTop:43}}
				ref={el=>this.nav=el}
				navigator={this.props.navigator}
				willFocus={()=>console.log('will focus')}
				didFocus={()=>console.log('did focus')}
				initialRoute={{name:'deal'}}
				renderScene={this.renderDeal.bind(this)}
				navigationBar={
					<Navigator.NavigationBar
					// navigator={navigator}
			            routeMapper={NavigationBarRouteMapper}
			            style={{height:53,backgroundColor:'white',borderBottomWidth:.5,borderColor:'rgb(215,215,215)'}}
			          />
				}

			/>

			)
	}

};
Object.assign(DealRoute.prototype, TimerMixin);