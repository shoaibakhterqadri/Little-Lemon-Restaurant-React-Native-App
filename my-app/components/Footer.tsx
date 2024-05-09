import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
      <Text style={styles.content} numberOfLines={1}>All Rights are reserved 2024</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    content:{
        backgroundColor:"orange",
        textAlign:"center",
        marginBottom:10,
        fontSize:30,
    }
})