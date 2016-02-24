import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Navigator,
  View,
  ScrollView,
  TouchableOpacity,
  SegmentedControlIOS
} =React;
import DealCard from './dealCard'
import DealContent from './dealContent'


export default class Deal extends Component{
	state={navigator:null};

	componentDidMount(){
			this.handle = React.findNodeHandle(this.segmentedControl);
	}
	render(){
	
		return (
			<ScrollView ref={el=>this.scroll=el} scrollEventThrottle={200} onScroll={(e)=>{
				UIManager.measure(this.handle,(x,y,w,h,px,py)=>{
					if(py<80 && py>50){
						this.border.setNativeProps({style:{borderBottomWidth:1}})
					}else{
						this.border.setNativeProps({style:{borderBottomWidth:0}})
					}
				})
			}}
			stickyHeaderIndices={[1]} automaticallyAdjustContentInsets={false}
			 style={{flex:1,backgroundColor:'white',}}>
					<DealCard isOpen={true}/>
					<View ref={el=>this.border=el} style={{backgroundColor:'white',height:50*k,justifyContent:'center',borderBottomWidth:0,borderColor:'#e4e4e4'}}>
					<SegmentedControlIOS ref={el=>this.segmentedControl=el} values={['Купить', 'Бизнес', 'Отзывы']} 
					   tintColor={'#0679a2'} selectedIndex={0} style={{backgroundColor:'white',margin:7*k,marginBottom:0}}
					   onValueChange={(e)=>{
					   		if (e==='Купить') {
					   			this.dealContent.changeNum(0)
					   		}else if(e==='Бизнес'){
					   			this.dealContent.changeNum(1)
					   			this.scroll.scrollTo({x:0,y:380*h,animated:true})
					   		}else if(e==='Отзывы'){
					   			this.dealContent.changeNum(2)
					   		}
					   }}
					   />	
					   </View>
					<DealContent navigator={this.props.navigator} ref={el=>this.dealContent=el}/>
				</ScrollView>



			)
	}

};
Object.assign(Deal.prototype, TimerMixin);