/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { Model } from 'falcor'
// import { Observable } from 'rxjs/Observable'

// const $ref = Model.ref
// const $atom = Model.atom
// const model = new Model({
//   cache: {
//     deals: {
//       0: $ref(['dealsById', 123]),
//       1: $ref(['dealsById', 234]),
//       2: $ref(['dealsById', 345])
//     },
//     dealsById: {
//       123: {
//         id: 123,
//         title: 'Голландские розы',

//         images: $atom([
//           'http://'
//         ]),
//       }
//     }
//   }
// })

let Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');
global.k=windowSize.width/320
global.h=windowSize.height/568
global.separator={height:1,backgroundColor:'#e4e4e4'}
global.center={justifyContent:'center',alignItems:'center'}
import FalcorHttpDatasource from 'falcor-http-datasource'
import {Model} from 'falcor'
const $ref = Model.ref
let model = new Model({
  cache: {
    'featuredDeals': {
      0: $ref(['dealsById', 123]),
      1: $ref(['dealsById', 234]),
      2: $ref(['dealsById', 345])
    },
    dealsById: {
      123: {
        id: 123,
        title: 'Голландские розы',
      }
    }
  }
  // source: new FalcorHttpDatasource('http://169.254.225.109:9090/model.json'),
}).batch(20)

import {Provider} from 'refar'
import App from './components/app.js'
class poblatu extends Component {
  render() {
    return (
      <Provider model={model}>
        <App/>
      </Provider>
    );
  }
}



AppRegistry.registerComponent('poblatu', () => poblatu);
