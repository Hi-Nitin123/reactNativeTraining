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
} from 'react-native';

function ProductDetails({route, navigation}) {
  const {productId} = route.params;

  const [selectedPd, setSelectedPd] = useState([]);

  const styles = StyleSheet.create({
    layOut: {
      flexDirection: 'column',
    },
  });

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then(res => {
      setSelectedPd(res.data);
    }, []);
  }, []);

  return (
    <View>
      <Image
        style={{height: 200, width: 100}}
        source={{
          uri: selectedPd.image,
        }}
      />
      <Text>Price - {selectedPd.price}</Text>
      {/* <Text>Rating - {selectedPd.rating.rate}</Text> */}
      <Text>Description - {selectedPd.description}</Text>
    </View>
  );
}

export default ProductDetails;
