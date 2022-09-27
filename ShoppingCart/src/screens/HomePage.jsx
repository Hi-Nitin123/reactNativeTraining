import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import {debounce} from 'lodash';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';

let timer;
let originalList = [];
function HomePage({navigation}) {
  // const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      originalList = res.data;
      setSearchedProducts(res.data);
    });
  }, []);

  const filteredData = () => {
    console.log('filterCalled');
    let searchedData = originalList.filter(ele =>
      ele.category.includes(searchTerm),
    );
    setSearchedProducts(searchedData);
  };

  const debounce = (func, timeout = 2000) => {
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };
  const optimizedSearch = debounce(() => filteredData());
  const searchHandler = val => {
    setSearchTerm(val);
    optimizedSearch();
  };

  const styles = StyleSheet.create({
    layOut: {
      flexDirection: 'row',
      marginVertical: 9,
      backgroundColor: 'white',
      paddingLeft: 10,
      height: 100,
    },
    // listText: {
    //   color: 'green',
    //   backgroundColor: 'white',
    //   fontSize: 20,
    // },
    searchBar: {
      fontSize: 20,
      height: 60,
      borderRadius: 50,
      width: 400,
      backgroundColor: 'white',
      paddingLeft: 20,
    },
    images: {
      height: 90,
      width: 80,
    },
  });
  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search your product here"
        onChangeText={val => {
          searchHandler(val);
        }}
        value={searchTerm}
      />
      <FlatList
        keyExtractor={prod => {
          return prod.id;
        }}
        data={searchedProducts}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.layOut}
            onPress={() => {
              navigation.navigate('Product', {
                productType: item.category,
              });
            }}>
            <Image
              style={styles.images}
              source={{
                uri: item.image,
              }}
            />
            <Text style={StyleSheet.listText}>{item.category}</Text>
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
}

export default HomePage;
