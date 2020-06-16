import React from 'react';
import {Text,SectionList,StyleSheet,FlatList, View} from 'react-native';
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};
export default App = ()=>{
      return(
        <View style={style.style1}>
          <View style={{width:40,height:45,backgroundColor:"red"}}/>
          <View style={{width:40,height:45,backgroundColor:"green"}}/>
          <View style={{width:40,height:45,backgroundColor:"blue"}}/>

        </View>
        
      )
}
const style=StyleSheet.create({
  style1:{
      marginTop:"12%",
      flex:1,
      flexDirection:'row',
      alignSelf:"center",
  },
})