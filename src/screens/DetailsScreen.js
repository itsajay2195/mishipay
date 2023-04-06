import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import {SIZES, COLORS} from '../styles';
import {fetchCountryData} from '../utils/helpers';
import {LOGGED_IN_SCREEN_NAME} from '../constants/screenConstants';
import {AppContext} from '../context/AppContext';
import ThemeSwitchButton from '../components/ThemeSwitch';

const ITEM_HEIGHT = SIZES.height * 0.5;
const ITEM_WIDTH = SIZES.width;
const DetailsScreen = ({navigation}) => {
  const {isDarkTheme,changeTheme} = useContext(AppContext);
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
  const styles = getStyles(isDarkTheme);

  useEffect(() => {
    const countryDataasync = async () => {
      const data = await fetchCountryData(borders);
      setCountryData(data);
    };

    borders ? countryDataasync() : null;
  }, []);

  return (
    <View style={styles.container}>
      <ThemeSwitchButton isDarkMode={isDarkTheme} changeTheme={changeTheme}/>
      <Header isDarkTheme={isDarkTheme}/>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Image resizeMode='stretch' source={{uri: item.flags.png}} style={styles.flagStyle} />
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
          {borders.length > 0 ? (
            <>
              <Text style={styles.populationTextStyle}>
                <Text style={styles.labelStyle}>Borders: </Text>
              </Text>

              <View
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}>
                {countryData.map((country, index) => (
                  <TouchableOpacity
                    key={`${country}${index}`}
                    onPress={() =>
                      navigation.navigate(LOGGED_IN_SCREEN_NAME.details, {
                        item: country,
                      })
                    }
                    style={{
                      padding: 5,
                      backgroundColor: COLORS.white,
                      elevation: 10,
                      shadowColor: COLORS.grey,
                      marginVertical: 5,
                      marginRight: 5,
                    }}>
                    <Text>{country.name.common}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const getStyles = isDarkMode => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? COLORS.dark : COLORS.light,
    },
    flagStyle: {width: ITEM_WIDTH, height: ITEM_HEIGHT},
    countryNameStyle: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: isDarkMode ? COLORS.light : COLORS.dark,
    },
    populationTextStyle: {paddingVertical: 5, fontSize: 14, color: isDarkMode ? COLORS.light : COLORS.dark},
    labelStyle: {fontSize: 14, fontWeight: 'bold', color: 'black'},
  });
};
