import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';

import { editlogin } from  './../../../../redux/action'

const Login = () => {

  const dispatch = useDispatch();

  const pressConnexion = () => {
    dispatch(editlogin(true))
    console.log("connexion")
  }

  return (
    <View>
      <Text>Login</Text>
      <Button
      onPress={pressConnexion}
      title='Connexion'
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})