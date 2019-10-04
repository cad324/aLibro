import React, {Component} from "react"
import {View,
        Text,
        StyleSheet,
} from "react-native"

class Profile extends Component {
  static navigationOptions = {
      title: 'Profile',
    };
    render() {
        return (
            <View>
                <Text>Sam Johnson</Text>
            </View>
        );
    }
}

export default Profile;
