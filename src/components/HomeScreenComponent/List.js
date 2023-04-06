import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


const List = () => {
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default List;

const styles = StyleSheet.create({});
