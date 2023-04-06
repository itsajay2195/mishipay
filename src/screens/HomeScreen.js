import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';

const HomeScreen = () => {
    const { loading } = useContext(AppContext);


  return (
    <View>
      <Text>{loading.toString()}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})