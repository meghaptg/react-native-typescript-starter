import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import { Container,
         Content,
         Form,
         Item,
         Input,
         Label,
         H2,
         Text,
         Footer,
         FooterTab,
         Button, } from 'native-base';
import { bindActionCreators } from 'redux';
import { login } from './../redux/actions';
import { connect } from 'react-redux';
const {height,width} = Dimensions.get('window');

interface Props {
}

class LoginPage extends Component<Props,{}> {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }
    signin() {
      console.log('button pressed', this.state);
      var data = {
        name: 'megha',
        password: 'password'
      };
      console.log('button pressed - assigning dummydata : ', data);
      this.props.login(data);
    }

    render() {
      console.log('the login data in render is  : ', this.props.loginData);
        return (
          <Container>
            <Content>
            <Image
            source={require('./../images/background.png')}
            style={styles.container}>
              <Image
                source={require('./../images/full_logo.png')}
                style={{width: width*.8, height: width*.175, padding: 10}}/>
              <H2 style={{color: '#898989', marginTop: 10}}>Login</H2>
              <Form style={{position: 'absolute', bottom: 44}}>
                <Item stackedLabel>
                  <Label>User name</Label>
                  <Input />
                </Item>
                <Item stackedLabel>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
            </Image>
            </Content>
            <Footer>
              <FooterTab>
                <Button full
                  onPress={this.signin.bind(this)} >
                  <Text>Sign in</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 200,
    width: width,
    height: height - 80,
    backgroundColor:'transparent',
    alignItems: 'center',
  },

});

const mapStateToProps = ({ loginConnect }) => {
   const { loginData } = loginConnect;

  return {
      loginData
          };
};

export default connect(mapStateToProps, {
  login,
})(LoginPage);
