import React,{Component} from "react";
import {View} from "react-native";
import Barang from "./Component/Barang"
import Headers from "./Component/Headers"

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Headers data="SELAMAT DATANG"/>
        <Barang style={{flex:1}}/>
      </View>
    )
  }
}
