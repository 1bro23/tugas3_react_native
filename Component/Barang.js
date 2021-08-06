import React,{Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class Barang extends Component{

  constructor(){
    super();
    this.state={
      jumlah:0
    }
  }

  buttonTambah=()=>{
    this.setState({jumlah:this.state.jumlah+1})
  }

  buttonKurang=()=>{
    if(this.state.jumlah>0){
      this.setState({jumlah:this.state.jumlah-1})
    }else{
      alert("Jumlah Tidak Boleh Kurang Dari 0")
    }
  }

  render(){
    return(
      <View style={{flex:4, paddingHorizontal: 15 }}>
        <Text style={{textAlign:'right'}}>Jumlah : {this.state.jumlah}</Text>
        <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>Silahkan Tekan Tombol Dibawah</Text>
        <View style={{flex:1, flexDirection: 'row'}}>
          <TouchableOpacity onPress={this.buttonTambah} style={{backgroundColor: "green", flex: 1, justifyContent:'center',margin: 20}}>
            <Text style={{color:"white", textAlign:'center', fontSize: 20}}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.buttonKurang} style={{backgroundColor: "darkred", flex:1, justifyContent:'center', margin: 20}}>
            <Text style={{color:"white", textAlign: 'center',fontSize: 20}}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:4}}>
          <Text style={{textAlign: 'center', fontSize: 60, color:"blue", marginTop: 20}}>{this.state.jumlah}</Text>
        </View>
      </View>
    )
  }
}
