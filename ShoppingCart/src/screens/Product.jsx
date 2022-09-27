import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';

let originalList = [];
let timer;
function HomePage({route, navigation}) {
  const {productType} = route.params;

  const [searchTerm, setSearchTerm] = useState('');
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${productType}`)
      .then(res => {
        originalList = res.data;
        setProducts(originalList);
      });
  }, []);

  const filteredData = () => {
    console.log('filterCalled');
    let searchedData = originalList.filter(ele =>
      ele.category.includes(searchTerm),
    );
    setProducts(searchedData);
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
    },
    searchBar: {
      fontSize: 20,
      height: 60,
      borderRadius: 50,
      width: 400,
      backgroundColor: 'white',
      paddingLeft: 20,
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
          console.log(prod.id, 'showProduct');
          return prod.id;
        }}
        data={product}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.layOut}
            onPress={() => {
              navigation.navigate('ProductDetails', {productId: item.id});
            }}>
            <Image
              style={{height: 60, width: 80}}
              source={{
                uri: item.image,
              }}
            />
            <Text>Price - {item.price}</Text>
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
}

export default HomePage;
