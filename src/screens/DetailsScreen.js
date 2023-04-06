import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {SIZES, COLORS} from '../styles';
import {fetchCountryData} from '../utils/helpers';
import { LOGGED_IN_SCREEN_NAME } from '../constants/screenConstants';

const ITEM_HEIGHT = SIZES.height * 0.5;
const ITEM_WIDTH = SIZES.width;
const DetailsScreen = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  const {
    population,
    region,
    capital,
    currencies,
    languages,
    subregion,
    borders,
  } = item;

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const countryDataasync = async () => {
      const data = await fetchCountryData(borders);
      console.log('oo', data[0])
      setCountryData(data);
    };
    countryDataasync();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Image source={{uri: item.flags.png}} style={styles.flagStyle} />
        <View style={{padding: 20}}>
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
            <Text style={styles.labelStyle}>Sub Region: </Text>
            {subregion}
          </Text>
          <Text style={styles.populationTextStyle}>
            <Text style={styles.labelStyle}>Capital: </Text>
            {capital}
          </Text>
          <Text style={styles.populationTextStyle}>
            <Text style={styles.labelStyle}>Currencies: </Text>
            {Object.values(currencies)
              .map(curr => curr.name)
              .join(', ')}
          </Text>
          {languages ? (
            <Text style={styles.populationTextStyle}>
              <Text style={styles.labelStyle}>Languages: </Text>
              {Object.values(languages).join(', ')}
            </Text>
          ) : null}
          <Text style={styles.populationTextStyle}>
            <Text style={styles.labelStyle}>Capital: </Text>
            {capital}
          </Text>
          <Text style={styles.populationTextStyle}>
            <Text style={styles.labelStyle}>Borders: </Text>
          </Text>

          <View
            style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
            {countryData.map(country => (
              <TouchableOpacity
                onPress={()=>navigation.navigate(LOGGED_IN_SCREEN_NAME.details,{item:country})}
                style={{
                  padding: 5,
                  backgroundColor: COLORS.white,
                  elevation: 10,
                  shadowColor: COLORS.grey,
                  marginRight: 5,
                }}>
                <Text>{country.name.common}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flagStyle: {width: ITEM_WIDTH, height: ITEM_HEIGHT},
  countryNameStyle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  populationTextStyle: {paddingVertical: 5, fontSize: 14, color: COLORS.grey},
  labelStyle: {fontSize: 14, fontWeight: 'bold', color: 'black'},
});
