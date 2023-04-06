import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {COLORS, SIZES} from '../../styles';
import {AppContext} from '../../context/AppContext';

const ITEM_HEIGHT = SIZES.height * 0.7 * 0.07;
let darkThemed;

const renderItem = ({item, onPress}) => {
  const styles = getStyles(darkThemed);
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={styles.renderItemContainer}>
      <Text style={styles.countryNameStyle}>{item}</Text>
    </TouchableOpacity>
  );
};

const keyExtractor = (item, index) => index.toString();

const RegionList = ({data, onPress}) => {
  const {isDarkTheme} = useContext(AppContext);
  darkThemed = isDarkTheme;
  return (
    <FlatList
      data={data}
      renderItem={({item}) => renderItem({item, onPress})}
      keyExtractor={keyExtractor}
      style={{flex: 1}}
    />
  );
};

export default RegionList;

const getStyles = isDarkMode => {
  return StyleSheet.create({
    renderItemContainer: {
      height: ITEM_HEIGHT,
      width: '100%',
      backgroundColor: isDarkMode ? COLORS.dark: COLORS.white,
      padding: 2,
    },
    countryNameStyle: {fontSize: 18, fontWeight: 'bold', color: isDarkMode ? COLORS.white : COLORS.black},
  });
};
