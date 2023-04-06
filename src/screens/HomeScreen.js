import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState, useCallback} from 'react';
import {AppContext} from '../context/AppContext';
import List from '../components/HomeScreenComponent/List';
import {fetchcountries, fetchSearchResults, resetPage} from '../utils/helpers';
import SearchBar from '../components/SearchBar';
import debounce from 'lodash.debounce';
import Filter from '../components/HomeScreenComponent/Filter';
import { COLORS } from '../styles';

const HomeScreen = () => {
  const {loading, setLoading, setCountries, countries, setRegions, regions,isDarkTheme} =
    useContext(AppContext);
  const [searchText] = useState(null);
  const [filtereData, setFilteredData] = useState([]);
  const styles = getStyles(isDarkTheme);

  const resetFilteredData= ()=> setFilteredData([])
  const resetSearchText= ()=> handleSearch("")

  useEffect(() => {
    fetchcountries().then(data => setCountries(data));
  }, [searchText]);

  useEffect(() => {
    if (regions.length <= 0) {
      console.log('ue2');
      let regionsFilter = countries
        .map(item => item.region) // extract the regions from the objects
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort(); // remove duplicates
      setRegions(regionsFilter);
    }
  }, [countries]);

  const handleSearch = useCallback(
    debounce(async searchQuery => {
      if (searchQuery) {
        const data = await fetchSearchResults(searchQuery);
        setFilteredData(data);
      } else {
        setFilteredData([]);
        resetPage();
        const data = await fetchcountries();
        setCountries(data);
      }
    }, 500),
    [],
  );
  

  const endReachedCall = useCallback(async () => {
    if (!loading) {
      setLoading(true);
      try {
        const nextData = await fetchcountries(searchText);
        setCountries(prevData => [...prevData, ...nextData]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [loading, searchText]);

  return (
    <View style={styles.container}>
      <View
        style={styles.heading}>
        <Text style={styles.headingText}>
          where in the world?
        </Text>
      </View>

      <View style={styles.content}>
        <SearchBar onChangeText={handleSearch} value={searchText} isDarkTheme={isDarkTheme} />
        <Filter resetFilteredData={resetFilteredData} resetSearchText={resetSearchText} />
        <List
          data={filtereData && filtereData.length > 0 ? filtereData : countries}
          endReachedCall={endReachedCall}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const getStyles = isDarkMode => {
  return  StyleSheet.create({
  container:{flex: 1, backgroundColor: isDarkMode ? COLORS.dark  : COLORS.white},
  content: {flex: 1, marginTop: 5, padding: 20, backgroundColor: isDarkMode ? COLORS.dark:COLORS.white},
  heading:{
    backgroundColor: isDarkMode ? COLORS.dark:COLORS.white,
    height: 80,
    padding: 20,
  },
  headingText:{fontSize: 24, fontWeight: 'bold', color: isDarkMode ? COLORS.white  : COLORS.dark}
})}
