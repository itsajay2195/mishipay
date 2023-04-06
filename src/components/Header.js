import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SIZES} from '../styles';

const Header = ({title, isDarkMode, goBack, switchTheme}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconWrapper} onPress={goBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.switchText}>{title}</Text>

      {/* <View style={styles.switchContainer}>
        <Ionicons
          name={!isDarkMode ? 'md-sunny' : 'md-moon'}
          size={24}
          color={!isDarkMode ? '#000000' : '#FFFFFF'}
        />

        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switchTheme}
          value={isDarkMode}
          style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
        /> */}
      {/* <Ionicons
          name={!isDarkMode ? 'md-sunny' : 'md-moon'}
          size={24}
          color={!isDarkMode ? '#000000' : '#FFFFFF'}
        /> */}
      {/* </View> */}
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
  // headeTitle: {
  //   fontWeight: 'bold',
  //   fontSize: SIZES.h2,
  // },
  // switchContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // switchText: {
  //   marginHorizontal: 5,
  //   fontWeight: 'bold',
  // },
});
