import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../styles';

const SearchBar = ({onChangeText, value,isDarkTheme}) => {
  const styles = getStyles(isDarkTheme);
  return (
    <View
      style={styles.container}>
      <Ionicons name={'search'} size={18} color={isDarkTheme ? COLORS.white :COLORS.dark} />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.searchInputStyle}
        placeholder={'search for a country'}
        placeholderTextColor={isDarkTheme ? COLORS.grey :COLORS.black}
        ></TextInput>
    </View>
  );
};

export default SearchBar;

const getStyles = isDarkMode => {
  return StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: isDarkMode ? COLORS.dark :COLORS.white,
    padding: 10,
    elevation: 10,
    shadowColor: COLORS.grey,
    alignItems: 'center',
  },
  searchInputStyle: {paddingLeft: 20, fontSize: 16, color:isDarkMode ? COLORS.white :COLORS.dark },
})}
