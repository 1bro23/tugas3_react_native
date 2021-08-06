import React, {Component} from "react";
import {View, Text} from "react-native";

export default class Headers extends Component{
  render(){
    return(
      <View style={{backgroundColor: "#9bab4e" ,flex:1, justifyContent:"center"}}>
        <Text style={{textAlign:"center", color:"white"}}>Tugas 3 React Native</Text>
        <Text style={{textAlign:"center", color:"#993c9e",fontSize: 23}}>{this.props.data}</Text>
      </View>
    )
  }
}
