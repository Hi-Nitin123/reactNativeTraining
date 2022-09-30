import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = ({title, results, navigation}) => {
  if (!results.length) {
    return null;
  }
  const styles = StyleSheet.create({
    titleStyle: {
      fontSize: 18,
      color: 'black',
      paddingLeft: 15,
      marginVertical: 10,
    },
    restaurantContainer: {
      marginVertical: 5,
    },
  });
  return (
    <View style={styles.restaurantContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        keyExtractor={ele => ele.id}
        style={styles.restaurantContainer}
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ResultScreen', {id: item.id});
              }}>
              <ResultDetails
                name={item.name}
                imageUrl={item.image_url}
                restaurantTitle={title}
                rating={item.rating}
                reviews={item.review_count}
              />
            </TouchableOpacity>
          );
        }}></FlatList>
    </View>
  );
};

export default ResultsList;
