import React,{Component} from "react";
import {View,Button,Text,StyleSheet} from 'react-native';
import style from './styles/style';
class App extends Component{
  constructor(){
    super()
    this.state={
      stack:[],
      str:"",
      displayText:"",
      inputText:"",
    }
    this.display=this.display.bind(this)
    this.calculate=this.calculate.bind(this)
    this.Pressed=this.Pressed.bind(this)
    this.displayInput=this.displayInput.bind(this)

  }
  display(ans){
    this.setState({
      displayText:ans
    })
  }
  displayInput(inp){
      this.setState({
        inputText:inp
      })
  }
  calculate(){
    if(this.state.stack.length>0){
      str=""
      
      var i=0
      for(i=0;i<this.state.stack.length;i++){
        str=str+this.state.stack[i]
      }
      console.log("string",str)
      try{
        //this.displayInput(str)
        var ans=eval(str)
        this.display(ans.toString(10))
      }
      catch(err){
        var ans="Math/Syntax Error"
      }
      this.displayInput(str)
    }
  }

  Pressed(prop){
    var flag=1
    console.log(prop)
      switch(prop){
        case "D":
          if(this.state.stack.length>=0){
            this.setState((old)=>{
                stack:old.stack.pop()
            }
            )
          if(this.state.stack.length==0){
            this.setState({
              inputText:"",
              displayText:""
            })
          }
          }
          break;
        case "+":
          this.state.stack.push("+")
          break;
        case "/":
         this.state.stack.push("/")
          break;
        case "*":
          this.state.stack.push("*")
          
            break;
        case "-":
          this.state.stack.push("-")
          break;
        case "C":
          this.state.stack=[]
          this.setState({
            inputText:""
          })
          flag=0
          break;
        case "=":
          this.state.stack.push("=")
          break;
        case "0":
          this.state.stack.push("0")
          break;
        case "1":
          this.state.stack.push("1")
          break;
        case "2":
          this.state.stack.push("2")
          break;
        case "3":
          this.state.stack.push("3")
          break;
        case "4":
          this.state.stack.push("4")
          break;
        case "5":
          this.state.stack.push("5")
          break;
        case "6":
          this.state.stack.push("6")
          break;
          
        case "7":
          this.state.stack.push("7")
          break;
        case "8":
          this.state.stack.push("8")
          break;
        case "9":
          this.state.stack.push("9")
          break; 
      }
      console.log("STACk",this.state.stack)
      if(flag==1)
      this.calculate()
  }
  render(){
    return(
      <View style={style.container}>
        <View style={style.output}>
          <Text
          style={{
            fontSize:50,
            color:"#ffffff",
            position:"relative",
            paddingTop:"7%",
            paddingLeft:"4%",
          }}>{this.state.displayText}</Text>
        </View>
        <View style={style.input}>
          <Text
          style={{
            fontSize:35,
            color:"#fff",
            position:"relative",
            paddingTop:"7%",
            paddingBottom:"10%",
            paddingRight:"5%",
            justifyContent:"flex-end"

            
          }}>{this.state.inputText}</Text>
        </View>
        <View style={{flexDirection:"row",height:"100%",width:"100%"}}>
          <View style={style.operators}>
            <Text style={text.op} onPress={()=>this.Pressed("D")}>D</Text>
            <Text style={text.op} onPress={()=>this.Pressed("+")}>+</Text>
            <Text style={text.op} onPress={()=>this.Pressed("/")}>/</Text>
            <Text style={text.op} onPress={()=>this.Pressed("*")}>*</Text>
            <Text style={text.op} onPress={()=>this.Pressed("-")}>-</Text>
            <Text style={text.op} onPress={()=>this.Pressed("C")}>C</Text>
            <Text style={text.op} onPress={()=>this.Pressed("=")}>=</Text>

          </View>
            <View style={style.numbers}>
              <View style={style.column}>
                <View style={{flexDirection:"row",
                width:"100%"}}>
                  <Text style={text.txtLeftTop} onPress={()=>this.Pressed("1")}>1</Text>
                  <Text style={text.txtTop}     onPress={()=>this.Pressed("2")}>2</Text>
                  <Text style={text.txtTop}     onPress={()=>this.Pressed("3")}>3</Text>
                </View>
              </View>
              <View style={style.column}>
              <View style={{flexDirection:"row",
                width:"100%"}}>
                  <Text style={text.txtLeft} onPress={()=>this.Pressed("4")}>4</Text>
                  <Text style={text.txt}     onPress={()=>this.Pressed("5")}>5</Text>
                  <Text style={text.txt}     onPress={()=>this.Pressed("6")}>6</Text>
                </View>
              </View>
              <View style={style.column}>
              <View style={{flexDirection:"row",
                width:"100%"}}>
                  <Text style={text.txtLeft} onPress={()=>this.Pressed("7")}>7</Text>
                  <Text style={text.txt}     onPress={()=>this.Pressed("8")}>8</Text>
                  <Text style={text.txt}     onPress={()=>this.Pressed("9")}>9</Text>
                </View>
              </View>
              <View style={style.column}>
              <View style={{flexDirection:"row",
                width:"100%"}}>
                  <Text style={text.txtZero} ></Text>
                  <Text style={text.txtZero} onPress={()=>this.Pressed("0")}>0</Text>
                  <Text style={text.txtZero} ></Text>
                </View>
              </View>

            </View>
      </View>
      </View>
      
    )
  }
}
const text=StyleSheet.create({
  txt:{
    color:"#ffffff",
    marginLeft:"20%",
    marginTop:"20%",
    fontSize:30
  },
  txtTop:{
    color:"#ffffff",
    marginLeft:"20%",
   marginTop:"10%",
     fontSize:30
  },
  txtLeftTop:{
    color:"#ffffff",
    marginLeft:"17%",
    marginTop:"10%",
    fontSize:30
  },
  txtLeft:{
    color:"#ffffff",
    marginLeft:"17%",
    marginTop:"20%",
    fontSize:30
  },
  txtZero:{
    color:"#ffffff",
    marginLeft:"21%",
    marginTop:"7%",
    fontSize:30
  },
  op:{
    position:"relative",
    fontSize:32,
    color:"#ffffff",
    marginLeft:"30%",
    marginTop:"20%",
  },
  input:{
    fontSize:30,
    color:"#ffffff"
  }
})
export default App;
