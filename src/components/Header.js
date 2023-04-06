import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { LOGGED_IN_SCREEN_NAME } from '../constants/screenConstants';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconWrapper} onPress={()=>navigation.navigate(LOGGED_IN_SCREEN_NAME.home)}>
        <Image  style={{height:24,width:24}} source={require("../assets/back.png")}/>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display:"flex",
    margin:20,
    zIndex: 10,
    flex:1
  },
  iconWrapper:{height:40,width:40,backgroundColor:"gray", justifyContent:"center",alignItems:"center", borderRadius:20,opacity:0.7}
});
