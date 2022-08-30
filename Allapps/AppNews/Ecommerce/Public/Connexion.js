import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Login = () => {
  const pressConnexion = () => {
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