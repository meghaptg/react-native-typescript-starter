import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';
import { bindActionCreators } from 'redux';
//import * as LoginActions from '../redux/login/actions';
import { connect } from 'react-redux';

interface Props {
    userName: ''
}

class LoginPage extends Component<Props,{}> {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }

    render() {
        return (
            <Image
                source={require('./../images/background.png')}
                style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(name)=>this.setState({name})}
                    value={this.state.name}
                />
            </Image>

        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000'
  },
  textInput: {
    //height: 44,
    fontSize: 24,
  }
});

//export default LoginPage;
export default connect(state => ({}))(LoginPage);
