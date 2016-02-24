import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  TextInput,
  View,
  TouchableOpacity
} =React;
export default class Ask extends Component{
	state={height:80*k,allCanSee:true,allCanAnswer:true};
	render(){
		return (

			<View style={{flex:1,backgroundColor:'white',padding:7*k,}}>
				<View style={{marginBottom:7*k}}>
				<TextInput
                    ref={el=>this.textInput=el}
                    style={{height:Math.max(80*k,this.state.height),alignSelf:'center',
                      borderRadius:3*k,backgroundColor:'white',fontSize:16, 
                      ...center,marginBottom:6*k,borderWidth:1,borderColor:'rgb(180,180,180)',
                      marginTop:6*k,paddingTop:4*k,paddingBottom:4,
                      width:300*k,paddingLeft:10*k}}
                    value={this.state.text}
                    // autoFocus={true}
                    multiline={true}
                    onChange={(event) => {
                        this.setState({
                          text: event.nativeEvent.text,
                          height: Math.min(event.nativeEvent.contentSize.height,140*k)
                        });
                      }}
                    placeholder={'Написать вопрос'}
                  />

                  <View style={{flexDirection:'row'}}>
	                  <View style={{...center,flex:1}}>
	                  		<Text  >Вопрос виден</Text>
	                  		<TouchableOpacity onPress={()=>this.setState({allCanSee:!this.state.allCanSee})} style={s.blueBox}>
	                  			{this.state.allCanSee?<Text style={s.whiteButtonText}>Всем</Text>:<Text style={s.whiteButtonText}>Только мне</Text>}
	                  		</TouchableOpacity>
	                  		
	                  	</View>
	                  	<View style={{...center,flex:1}}>
	                  	<Text >Отвечать {this.state.allCanAnswer?'могут':'может'}</Text>
	                  	<TouchableOpacity onPress={()=>this.setState({allCanAnswer:!this.state.allCanAnswer})}  style={s.blueBox}>
	                  			{this.state.allCanAnswer?<Text style={s.whiteButtonText}>Все</Text>:<Text style={s.whiteButtonText}>Владелец</Text>}
	                  		</TouchableOpacity>
	                  	</View>
	                  </View>

                  </View>



                  <View style={{...separator}}/>


			</View>

			)
	}

};
Object.assign(Ask.prototype, TimerMixin);