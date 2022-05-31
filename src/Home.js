import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Home extends Component {

  static navigationOptions = {
    title: null,
    header: null
  }
  constructor(props){
    super(props);
    this.state = {}

    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
  }

  cadastrar(){
    this.props.navigation.navigate('Login');
  }
  logar(){
    this.props.navigation.navigate('Cadastro');
  }
  render() {
    return (
      <View style={styles.container}>
      
        <TouchableHighlight underlayColor="#CCCCCC" style={styles.botao} onPress={this.cadastrar}>
          <Text style={styles.btnTxt}>Fazer Login</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="#CCCCCC" style={styles.botao} onPress={this.logar}>
          <Text style={styles.btnTxt}>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold'
  },
  botao:{
    backgroundColor: '#FF0000',
    padding: 8,
    width: 250,
    borderRadius: 3,
    marginBottom: 5,
  }
});
