import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useContext, useEffect, useState, useCallback} from 'react';
import {AppContext} from '../context/AppContext';
import List from '../components/HomeScreenComponent/List';
import {fetchcountries, fetchSearchResults, resetPage} from '../utils/helpers';
import SearchBar from '../components/SearchBar';
import debounce from 'lodash.debounce';
import {COLORS} from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const {loading, setLoading, isDarkTheme, setCountries, countries} =
    useContext(AppContext);

  const [searchText] = useState(null);
  const [filtereData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchcountries().then(data => setCountries(data));
  }, [searchText]);

  const handleSearch = debounce(searchQuery => {
    if (searchQuery) {
      fetchSearchResults(searchQuery).then(data => setFilteredData(data));
    } else {
      setFilteredData([]);
      resetPage();
      fetchcountries().then(data => setCountries(data));
    }
  }, 500);

  const endReachedCall = async () => {
    if (!loading) {
      setLoading(true);
      setTimeout(async () => {
        const nextData = await fetchcountries(searchText);
        setCountries(prevData => [...prevData, ...nextData]);
        setLoading(false);
      }, 1000);
    }
  };

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
        {/* <SearchBar onChangeText={setSearchText} value={searchText} /> */}
        <View style={styles.searchcontainer}>
          <Ionicons name={'search'} size={18} color={COLORS.black} />
          <TextInput
            onChangeText={handleSearch}
            value={searchText}
            style={styles.searchInputStyle}
            placeholder={'search for a country'}></TextInput>
        </View>
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

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 5, padding: 20, backgroundColor: 'white'},
  searchcontainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    padding: 10,
    elevation: 10,
    shadowColor: COLORS.grey,
    alignItems: 'center',
  },
  searchInputStyle: {paddingLeft: 20, fontSize: 16},
});
