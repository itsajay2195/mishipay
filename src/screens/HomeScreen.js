import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';

const HomeScreen = () => {
    const { loading, isDarkTheme } = useContext(AppContext);


  return (
    <View>
        <Header title={"Home"} isDarkMode={isDarkTheme} goBack={()=>console.warn("ok")}/>
      <Text>{loading.toString()}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})