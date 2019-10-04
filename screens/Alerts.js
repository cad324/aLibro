import React, {Component} from "react"
import {View,
        Text,
        StyleSheet,
} from "react-native"

class Alerts extends Component {
  static navigationOptions = {
      title: 'Alerts',
    };
    render() {
        return (
            <View>
                <Text>Ding!</Text>
            </View>
        );
    }
}

export default Alerts;
