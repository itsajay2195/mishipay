import {StyleSheet, Text, View, Image, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../styles';

const ITEM_HEIGHT = SIZES.height * 0.7 - 80;
const ITEM_WIDTH = SIZES.width * 0.9;

const renderItem = ({item}) => (
  <TouchableOpacity style={styles.renderItemContainer}>
    <Image source={{uri: item.flags.png}} style={styles.flagStyle} />
    <View>
      <Text style={styles.countryNameStyle}>{item.name.common}</Text>
      <Text style={styles.populationTextStyle}>
        Population: {item.population}
      </Text>
    </View>
  </TouchableOpacity>
);

const keyExtractor = (item, index) => index.toString();

const List = ({data,endReachedCall, loading}) => {

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={endReachedCall}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading ? <ActivityIndicator /> : null}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  renderItemContainer: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    backgroundColor:COLORS.white,
    padding: 10,
    elevation:2,
    marginVertical:10
  },
  flagStyle: {width: ITEM_WIDTH - 20, height: ITEM_HEIGHT * 0.5},
  countryNameStyle: {fontSize: 18, fontWeight: 'bold', color:COLORS.black},
  populationTextStyle: {fontSize: 14, color: COLORS.grey},
});
