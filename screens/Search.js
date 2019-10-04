import React, {Component} from "react"
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        Image,
        PermissionsAndroid,
        Button
} from "react-native"

import { SearchBar } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';

class Search extends Component {
  static navigationOptions = {
      title: 'Search',
    };

    constructor() {
      super();
      this.state = {
        search: '',
        barcodes:[]
      }
    }

    updateSearch = (text) => {
      this.setState({search: text});
    }

    render() {
        const {search} = this.state;
        return (
            <View>
                <SearchBar
                  placeholder="Search by title, author..."
                  onChangeText={this.updateSearch}
                  value={search}
                  round={true}
                />
              <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <Image source={require('../assets/images/barcodescan.png')}/>
                <Text style={styles.scanText}>or scan ISBN</Text>
              </TouchableOpacity>
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                defaultTouchToFocus
                mirrorImage={false}
                onFocusChanged={() => {}}
                onZoomChanged={() => {}}
                type={RNCamera.Constants.Type.back}
                />
                <View>
              	  <Text>Please scan the barcode.</Text>
              	</View>
              	<View>
                        <Button
                          onPress={() => { console.log('scan clicked'); }}
                          title="Enter Barcode"
                         />
              	</View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  scanText: {
    fontSize:16
  }
})

export default Search;
