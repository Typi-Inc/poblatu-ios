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
  LayoutAnimation,
  Image
} =React;
import {fast } from './animations'
import MapView from 'react-native-maps';
export default class MapScreen extends Component{
	state={showUser:false};
	render(){
		return (
			<View style={{flex:1}}>
			<MapView 
				  style={{marginTop:5*k,height:568*h,width:320*k,alignSelf:'center'}}
				  showsUserLocation={this.state.showUser}
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
				  <TouchableOpacity onPress={()=>LayoutAnimation.configureNext(fast)||this.setState({showUser:true})} style={{position:'absolute',top:430*h,left:270*k,...center}}>
				  	<Image style={{height:40*k,width:40*k,opacity:0.8}} source={{uri:'target',isStatic:true}}/>

				  </TouchableOpacity>
				 </View>

			)
	}

};
Object.assign(MapScreen.prototype, TimerMixin);