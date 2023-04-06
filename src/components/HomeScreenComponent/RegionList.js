import {StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../styles';

const ITEM_HEIGHT = (SIZES.height * 0.7) * 0.07;
const ITEM_WIDTH = SIZES.width * 0.9;

const renderItem = ({item, onPress}) => (
  <TouchableOpacity  onPress = {()=>onPress(item)} style={styles.renderItemContainer}>
      <Text style={styles.countryNameStyle}>{item}</Text>
  </TouchableOpacity>
);

const keyExtractor = (item, index) => index.toString();

const RegionList = ({data, onPress}) => {

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => renderItem({ item, onPress })}
      keyExtractor={keyExtractor}
      style={{flex: 1}}
    />
  );
};

export default RegionList;

const styles = StyleSheet.create({
  renderItemContainer: {
    height: ITEM_HEIGHT,
    width: "100%",
    backgroundColor:COLORS.white,
    padding: 2,
  },
  countryNameStyle: {fontSize: 18, fontWeight: 'bold', color:COLORS.black},
});
