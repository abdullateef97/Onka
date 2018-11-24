import React, {Component} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {addNumbers, fetchNumbers} from './models/numberModel';
import Numbers from './db/numbers';
import {loadDb} from './api/async';


class InitComponent extends Component {
    componentDidMount(){
        addNumbers(Numbers).then((no) => {
            console.log('90', no)
            loadDb();
            ToastAndroid.show('gggggg', ToastAndroid.LONG)
        }).catch(err => console.log('errrrr', err))
    }
    render(){
        return(

            <View>
                <Text>999999</Text>
            </View>
        )

    }
}

export default InitComponent;