import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React from "react";

const FeedbackForm = () => {
    const [firstName,setFirstName]=React.useState("");
    const [lastName,setLastName]=React.useState("");
    const [message,setMessage]=React.useState("");

    
  return (
    <ScrollView>
      <Text style={{textAlign:"center",fontSize:20}}>How was your visit to Little Lemon? </Text>
      <Text>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!{" "}
      </Text>
      <TextInput style={{backgroundColor:"black",marginHorizontal:20,borderRadius:20,color:"white",padding:8,margin:10}} value={firstName} onChangeText={setFirstName} placeholder="First Name" placeholderTextColor={"white"}></TextInput>
      <TextInput style={{backgroundColor:"black",marginHorizontal:20,borderRadius:20,color:"white",padding:8,margin:10}} value={lastName} onChangeText={setLastName} placeholder="Last Name" placeholderTextColor={"white"}></TextInput>
      <TextInput style={{backgroundColor:"black",marginHorizontal:20,borderRadius:20,color:"white",padding:8,margin:10}} value={message} onChangeText={setMessage} placeholder="Message" placeholderTextColor={"white"}></TextInput>

    </ScrollView>
  );
};

export default FeedbackForm;

const styles = StyleSheet.create({});