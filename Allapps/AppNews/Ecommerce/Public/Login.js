import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
      <Button
      onPress={connexion}
      title='Connexion'
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})