import React, {Component} from "react"
import {View,
        Text,
        StyleSheet,
        Button,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

class Home extends Component {

  static navigationOptions = {
      title: 'Home',
    };

  constructor() {
    super();
    this.state = {
      nowReading:3,
      forLater: 5,
      recommendationCount: 4,
      progress:30,
      goal:45
    }
  }

  render() {
      const {progress} = this.state;
      const {goal} = this.state;
      const progress_percentage = progress/goal;
      return (
          <View>
              <View style={styles.main}>
                <Progress.Circle color={'#26CACA'} style={styles.progressCircle} showsText={true} thickness={15}
                  fill={'#E8FDE8'} progress={progress_percentage} size={150} formatText={() => {return `0h 30m`}}
                  textStyle={{color:'#005A76', fontWeight:'700'}} />
                  <Text style={styles.progressText}>Daily Goal: 45mins</Text>
                  <View style={styles.btnDiv}>
                    <Button title="Edit Goal" style={styles.editBtn}/>
                    <View style={{width:45}}></View>
                    <Button title="+ Add book" style={styles.addBtn}/>
                  </View>
              </View>
              <View>
                <Text style={styles.h2}>Now Reading ({this.state.nowReading})</Text>
              </View>
              <View>
                <Text style={styles.h2}>Books for later ({this.state.forLater})</Text>
              </View>
              <View>
                <Text style={styles.h2}>My Recommendations ({this.state.recommendationCount})</Text>
              </View>
          </View>
      );
    }
}

const styles = StyleSheet.create({
  main: {
    fontFamily:'Roboto',
    color:'#000',
    alignItems:'center',
    marginTop:25
  },
  addBtn: {
    padding:10,
    color:'#fff',
    marginLeft:45
  },
  editBtn: {
    padding:10,
    marginRight:45
  },
  progressText: {
    fontWeight:'700',
    marginTop:10,
    marginBottom:20,
    fontSize:18,
    color:'#258C8C'
  },
  h2: {
    fontWeight:'600',
    marginLeft:15,
    fontSize:22
  },
  btnDiv: {
    flexDirection:'row',
    marginBottom:30,
    marginTop:15
  }
});

export default Home;
