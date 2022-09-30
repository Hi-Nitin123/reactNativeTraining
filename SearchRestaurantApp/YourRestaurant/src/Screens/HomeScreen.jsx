import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';

let timer;

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [results, errorMessage, searchApi] = useResult();

  const searchByPrice = price => {
    return results.filter(result => result.price === price);
  };

  const filteredData = () => {
    console.log('calledDebounce');
    searchApi(searchText);
  };

  const debounce = (func, timeout = 3000) => {
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };
  const optimizedSearch = debounce(() => filteredData());
  const searchHandler = val => {
    setSearchText(val);
    optimizedSearch();
  };

  const styles = StyleSheet.create({
    listBackground: {
      marginVertical: 40,
    },
    elements: {
      marginVertical: 20,
      padding: 10,
    },
  });

  return (
    <View style={styles.listBackground}>
      <SearchBar
        style={styles.elements}
        term={searchText}
        onTermChange={newTerm => {
          searchHandler(newTerm);
        }}
        // ontermSubmit={() => {
        //   searchApi(searchText);
        // }}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost effective"
          results={searchByPrice('$')}
          navigation={navigation}
        />
        <ResultsList
          title="Bit pricer"
          results={searchByPrice('$$')}
          navigation={navigation}
        />
        <ResultsList
          title="Expensive"
          results={searchByPrice('$$$')}
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
