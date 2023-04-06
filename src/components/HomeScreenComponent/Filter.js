import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {COLORS} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppContext} from '../../context/AppContext';
import RegionList from './RegionList';
import {fetchRegionResults} from '../../utils/helpers';

const COMPONENT_HEIGHT = 60;

const Filter = ({resetFilteredData}) => {
  const {regions, setCountries, isDarkTheme} = useContext(AppContext);
  const [showDD, setShowDD] = useState(false);
  const [value, setValue] = useState(null);
  const styles = getStyles(isDarkTheme);

  useEffect(() => {
    if (value) {
      fetchRegionResults(value).then(data => setCountries(data));
    }
  }, [value,setCountries]);
  const onListItemPress = item => {
    resetFilteredData();
    setValue(item);
    setShowDD(!showDD);
  };
  return (
    <TouchableOpacity
      onPress={() => setShowDD(!showDD)}
      style={styles.container}>
      <Text style={styles.textStyle}>{value ? value : 'Filter by region'}</Text>

      <Ionicons
        name={showDD ? 'caret-up' : 'caret-down'}
        size={18}
        color={!isDarkTheme ? '#000000' : '#FFFFFF'}
      />
      {showDD && (
        <View style={styles.modalStyle}>
          <RegionList data={regions} onPress={onListItemPress} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Filter;

const getStyles = isDarkMode => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      zIndex: 10,
      alignItems: 'center',
      marginTop: 5,
      height: COMPONENT_HEIGHT,
      padding: 10,
      width: '100%',
      flexDirection: 'row',
      backgroundColor: isDarkMode ? COLORS.dark : COLORS.white,
      elevation: 10,
      shadowColor: isDarkMode ? COLORS.light : COLORS.grey,
    },
    textStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkMode ? COLORS.white : COLORS.black,
    },
    modalStyle: {
      position: 'absolute',
      flex: 1,
      top: 65,
      width: '106%',
      padding: 5,
      backgroundColor: isDarkMode ? COLORS.dark : COLORS.white,
    },
  });
};
