import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ThemeSwitchButton = ({ isDarkMode, changeTheme }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, isDarkMode && styles.buttonContainerDark]}
      onPress={changeTheme}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={!isDarkMode ? 'md-moon' : 'md-sunny'}
          size={24}
          color={!isDarkMode ? '#000000' : 'black'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    zIndex:10
  },
  buttonContainerDark: {
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ThemeSwitchButton;
