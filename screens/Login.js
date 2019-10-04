import React, {Component} from "react"
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ImageBackground,
        Image
} from "react-native"

class Login extends Component {
  static navigationOptions = {
      title: 'Login',
    };

  constructor() {
    super();
    this.state = {
      fontLoaded: false
    }
  }

  componentDidMount() {
    this.setState({ fontLoaded: true });
  }

  render() {
      const {navigate} = this.props.navigation;
      return (
          <View>
            <ImageBackground source={require("../assets/images/male-reading.jpg")} style={styles.backImg}>
              {this.state.fontLoaded ? (
                  <View style={styles.container}>
                    <Image style={styles.headerImg} source={require("../assets/images/book-white.png")}/>
                    <Image style={styles.header} source={require("../assets/images/aLibro.png")}/>
                    <Text style={styles.termsText}>
                      By tapping Log In, you agree to our <Text style={{textDecorationLine:'underline'}}>Terms of Service</Text> and
                      <Text style={{textDecorationLine:'underline'}}> Privacy Policy</Text>
                    </Text>
                    <TouchableOpacity style={styles.containerBtn} activeOpacity={0.8} onPress={() => {navigate('MainStack')}}>
                      <View>
                        <Text style={styles.buttonDark}>Login with phone</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerBtn2} activeOpacity={0.8} onPress={() => {navigate('MainStack')}}>
                      <View>
                        <Text style={styles.buttonLight}>Login with Google</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
              ) : null}
            </ImageBackground>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  backImg: {
    width:'100%',
    height:'100%',
    alignItems:'center',
    position:'relative'
  },
  header: {
    position:'absolute',
    top:175
  },
  container: {
    alignItems:'center'
  },
  buttonDark: {
    color:'#fff',
    fontFamily:'Roboto',
    fontWeight:'700',
    padding:25,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft: 45,
    paddingRight:45,
    borderColor:'#fff',
    backgroundColor:'#000',
    borderWidth:1,
    borderRadius:25
  },
  buttonLight: {
    color:'#000',
    fontFamily:'Roboto',
    fontWeight:'700',
    padding:25,
    paddingTop:10,
    paddingLeft: 45,
    paddingRight:45,
    paddingBottom:10,
    borderColor:'#000',
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius:25
  },
  containerBtn: {
    alignItems:'center',
    top:475,
    position:'absolute',
  },
  containerBtn2: {
    alignItems:'center',
    top:550,
    position:'absolute'
  },
  termsText: {
    fontSize:12,
    color:'#fff',
    fontFamily:'Roboto',
    textAlign:'center',
    marginTop:75,
    padding:45,
    position:'absolute',
    top:275
  },
  headerImg: {
    position:'absolute',
    top:50
  }
});

export default Login;
