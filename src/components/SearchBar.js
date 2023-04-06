import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../styles';

const SearchBar = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        width: '100%',
        padding: 10,
        elevation:2,
        alignItems:"center"
      }}>
      <Ionicons
        name={ 'search'}
        size={18}
        color={COLORS.black}
      />
      <TextInput style={{paddingLeft:20, fontSize:16}} placeholder={"SearchBar"}></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
