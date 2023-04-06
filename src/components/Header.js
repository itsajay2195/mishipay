import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SIZES} from '../styles';

const Header = ({title, isDarkMode, showBack, toggleTheme}) => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 60,
    paddingHorizontal: 20,
  },
  headeTitle: {
    fontWeight: 'bold',
    fontSize: SIZES.h2,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});
