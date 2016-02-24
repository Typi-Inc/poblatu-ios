import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} =React;
import AuthorName from './authorName'
import MapView from 'react-native-maps';
export default class AuthorTab extends Component{
	state={showUser:false,};
	static contextTypes={toggleTabs:React.PropTypes.func,};
	goToAsk(){
		this.context.toggleTabs(true)
		this.props.navigator.push({title:'Вопрос',name:'ask',toggleTabs:this.context.toggleTabs.bind(this)})
	}
	goToConditions(){
		this.context.toggleTabs(true)
		this.props.navigator.push({title:'Условия',name:'conditions',toggleTabs:this.context.toggleTabs.bind(this)})
	}
	goToMapScreen(){
		this.context.toggleTabs(true)
		this.props.navigator.push({title:'Карта',name:'mapScreen',toggleTabs:this.context.toggleTabs.bind(this)})
	}
	render(){
		return (

			<View style={{paddingTop:5*k,}}> 

				<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:5*k}}>
					<AuthorName/>
				
				</View>
				<View style={{...separator}}/>

				<View style={{flexDirection:'row',...center,marginTop:10*k,marginBottom:7*k}}>
					<View style={{flex:1,...center}}>
						<TouchableWithoutFeedback onPress={this.goToAsk.bind(this)}>
						<View style={{...center}}>
							<View style={{marginBottom:5*k,width:50*k,height:50*k,...center,borderWidth:3,borderColor:'#e4e4e4',
								borderRadius:28*k,paddingLeft:2*k,backgroundColor:'white'}}>
								<Image style={{height:22*k,width:22*k}} source={{uri:'chat',isStatic:true}}/>
							
							</View>
						
						<Text style={s.blueText}>Вопросы (0)</Text>
						</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={{flex:1,...center}}>
						<TouchableWithoutFeedback onPress={this.goToConditions.bind(this)}>
						<View style={{...center}}>
							<View style={{marginBottom:5*k,width:50*k,height:50*k,...center,borderWidth:3,borderColor:'#e4e4e4',
								borderRadius:28*k,paddingLeft:2*k,backgroundColor:'white'}}>
								<Image style={{height:18*k,width:18*k}} source={{uri:'conditions',isStatic:true}}/>
				
							</View>
					
						<Text style={s.blueText}>Условия</Text>
						</View>
					</TouchableWithoutFeedback>
					</View>
					<View style={{flex:1,...center}}>
					<TouchableWithoutFeedback>
						<View style={{...center}}>
						<View style={{marginBottom:5*k,width:50*k,height:50*k,...center,borderWidth:3,borderColor:'#e4e4e4',
							borderRadius:28*k,paddingLeft:2*k,backgroundColor:'white'}}>
							<Image style={{height:20*k,width:20*k}} source={{uri:'phone',isStatic:true}}/>
				
						</View>
						<Text style={s.blueText}>Позвонить</Text>
							</View>
					</TouchableWithoutFeedback>
					</View>


				</View>

		

				<TouchableWithoutFeedback onPress={this.goToMapScreen.bind(this)}> 
				<MapView 
				  style={{marginTop:5*k,width:320*k,height:240*k,alignSelf:'center'}}
				  showsUserLocation={this.state.showUser}
				  scrollEnabled={false}
				    initialRegion={{
				      latitude: 43.238949,
				      longitude:  76.889709,
				      latitudeDelta: 0.1022,
				      longitudeDelta: 0.0421,
				    }}
				  >
					   <MapView.Marker 
					   // pinColor={'#0679a2'}
					    coordinate={{latitude:43.238949,longitude:76.889709}}
					    // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
					  />
					  

				  </MapView>
				 </TouchableWithoutFeedback>

			</View>

			)
	}

};
Object.assign(AuthorTab.prototype, TimerMixin);