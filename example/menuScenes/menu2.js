import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native'

export default class Menu2 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#16a085"
          animated={true}
        />

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This is Menu - 2
        </Text>
        <TouchableOpacity onPress={ () => this.props.handleMenu() }>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>{'Toggle Menu'.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btnContainer: {
    width: 200,
    height: 40,
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
