import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const HomePage = ({navigation}) => {
  const arr = [
    {image: require('../assets/Images/rahul.jpg'), name: 'Rahul'},
    {image: require('../assets/Images/pramod.png'), name: 'Pramod'},
    {image: require('../assets/Images/yash.jpg'), name: 'Yash'},
  ];
  return (
    <FlatList
      keyExtractor={ele => ele.name}
      data={arr}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.mainStyling}
          imageSource={item.image}
          yourName={item.name}
          onPress={() => {
            navigation.navigate('ProfilePicture', {
              imageSource: item.image,
              name: item.name,
            });
          }}>
          <Image source={item.image} style={styles.imageStyling} />
          <Text style={styles.textStyling}>{item.name}</Text>
        </TouchableOpacity>
      )}></FlatList>
  );
};

const styles = StyleSheet.create({
  mainStyling: {
    flexDirection: 'row',
  },
  imageStyling: {
    borderRadius: 50,
    marginVertical: 20,
  },
  textStyling: {
    fontSize: 40,
    alignItems: 'center',
    color: 'black',
    marginVertical: 35,
    marginLeft: 60,
  },
});

export default HomePage;
