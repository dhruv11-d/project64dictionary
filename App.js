import React,{Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import dictionary from "./database";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      inputTxt:"",
      word:"",
      definition:"",
      category:"",
    }
  }
  searchWord=async(text)=>{
    var text=text.toLowerCase();
    
    try{
      var word= dictionary[text]["word"];
      var meaning= dictionary[text]["definition"];
      var wordtype= dictionary[text]["lexicalCategory"];
      this.setState({
        word:word,
        definition:meaning,
        category:wordtype,
      })
    }catch(err){
      this.setState({
        inputTxt:"",
        word:"",
        definition:"",
        category:""
      })
      alert("Sorry, word not found");
    }

  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Dictionary App</Text>
        <Text style={styles.txt1}>Search Words...</Text>
        <TextInput style={styles.txtInput} 
          onChangeText={value=> this.setState({inputTxt:value})}>
        </TextInput>
        <TouchableOpacity style={styles.searchBtn} 
          onPress={()=>{
            this.searchWord(this.state.inputTxt);
          }}>
          <Text style={styles.searchTxt}>Search</Text>
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Text style={styles.searched}>Word:{" "}</Text>
          <Text>{this.state.word}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.searched}>Definition:{" "}</Text>
          <Text>{this.state.definition}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.searched}>Category:{" "}</Text>
          <Text>{this.state.category}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    fontWeight: 700,
    textAlign:"center"
  },
  txt1:{
    marginTop:30,
    fontSize:18,
    textAlign:"center",
  },
  txtInput:{
    marginTop:20,
    borderWidth:1,
    textAlign:"center",
    fontSize:15,
    height:30,
    width:300,
    alignSelf:"center"
  },
  searchBtn:{
    marginTop:10,
    marginBottom:10,
    alignSelf:"center",
    borderWidth:1,
    backgroundColor:"#999999"
  },
  searchTxt:{
    padding:5
  },
  detailsContainer:{
    marginTop:10,
    flexDirection:'row',
    flexWrap:"wrap",
    alignSelf:"center",
    width:300
  },
  searched:{
    fontSize:18,
    fontWeight:500,
  }
});
