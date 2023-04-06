import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from '../context/AppContext';
import List from '../components/HomeScreenComponent/List';
import {fetchcountries} from '../utils/helpers';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const {loading, setLoading, isDarkTheme, setCountries, countries} =
    useContext(AppContext);

  const [searchText, setSearchText] = useState('');

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchcountries().then(data => setCountries(data));
  }, []);

  const endReachedCall = async () => {
    if (!loading) {
      setLoading(true);
      setTimeout(async () => {
        const nextData = await fetchcountries();
        setCountries(prevData => [...prevData, ...nextData]);
        setLoading(false);
      }, 1000);
    }
  };

  const onSearchChangeText= (text)=>{
    setSearchText(text)
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
        <SearchBar  onChangeText={onSearchChangeText} value = {searchText}/>
        <List
          data={countries}
          endReachedCall={endReachedCall}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 5, padding: 20, backgroundColor: 'white'},
});
