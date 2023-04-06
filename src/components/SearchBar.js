import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../styles';

const SearchBar = ({onChangeText, value}) => {
  return (
    <View
      style={styles.container}>
      <Ionicons name={'search'} size={18} color={COLORS.black} />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.searchInputStyle}
        placeholder={'SearchBar'}></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    padding: 10,
    elevation: 10,
    shadowColor: COLORS.grey,
    alignItems: 'center',
  },
  searchInputStyle: {paddingLeft: 20, fontSize: 16},
});
