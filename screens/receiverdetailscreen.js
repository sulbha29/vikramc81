import React ,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity, Alert,Text,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'

export default class ReceiverDetails extends Component{
    constructor(props){
        super(props)
      this.state={
          emailid:firebase.auth().currentUser.email,
         receiverid:this.props.navigation.getParam("details")[emailid]
      }
    } 
    render(){
       return(
           <View>

           </View>
       )
   }
}