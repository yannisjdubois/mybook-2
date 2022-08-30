import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { editlogin } from  './../../../../redux/action'
const Private = () => {
    
    const dispatch = useDispatch();

    const pressDeconnexion = () => {
        dispatch(editlogin(false))
        console.log("deconnexion")
      }

  return (
    <View>
      <Text>Private</Text>
      <Button
      onPress={pressDeconnexion}
      title='Déconnexion'
      />
    </View>
  )
}

export default Private

const styles = StyleSheet.create({})