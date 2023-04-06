import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import { LOGGED_IN_SCREEN_NAME } from '../../constants/screenConstants';

const ITEM_HEIGHT = SIZES.height * 0.5 - 80;
const ITEM_WIDTH = SIZES.width * 0.9;
let navRef;

const renderItem = ({item}) => {
  const {population, region, capital} = item;
  return (
    <TouchableOpacity onPress={()=>navRef.navigate(LOGGED_IN_SCREEN_NAME.details,{item:item})} style={styles.renderItemContainer}>
      <Image source={{uri: item.flags.png}} style={styles.flagStyle} />
      <View>
        <Text numberOfLines={1} style={styles.countryNameStyle}>
          {item.name.common}
        </Text>
        <Text style={styles.populationTextStyle}>
          <Text style={styles.labelStyle}>Population: </Text>
          {population}
        </Text>
        <Text style={styles.populationTextStyle}>
          <Text style={styles.labelStyle}>Region: </Text>
          {region}
        </Text>
        <Text style={styles.populationTextStyle}>
          <Text style={styles.labelStyle}>Capital: </Text>
          {capital}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const keyExtractor = (item, index) => index.toString();

const List = ({data, endReachedCall, loading}) => {
  const navigation = useNavigation();
  navRef = navigation;

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
    backgroundColor: COLORS.white,
    padding: 10,
    elevation: 2,
    marginVertical: 10,
  },
  flagStyle: {width: ITEM_WIDTH - 20, height: ITEM_HEIGHT * 0.5},
  countryNameStyle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  populationTextStyle: {paddingVertical: 5, fontSize: 14, color: COLORS.grey},
  labelStyle: {fontSize: 14, fontWeight: 'bold', color: 'black'},
});
