import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import List from '../components/HomeScreenComponent/List';
import {fetchcountries} from '../utils/helpers';

const HomeScreen = () => {
  const {loading, isDarkTheme, setCountries, countries} =
    useContext(AppContext);
  useEffect(() => {
    fetchcountries().then(data => setCountries(data));
  }, []);


  const endReachedCall = async () => {
    const nextData = await fetchcountries();
    setCountries(prevData => [...prevData, ...nextData]);
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          height: 80,
          padding: 20,
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          where in the world?
        </Text>
      </View>

      <View style={styles.container}>
        <List data={countries} endReachedCall={endReachedCall} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 5, padding: 20, backgroundColor: 'white'},
});
