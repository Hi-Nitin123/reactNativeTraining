import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

function ResultDetails({name, imageUrl, rating, reviews}) {
  const styles = StyleSheet.create({
    restaurant: {
      marginLeft: 15,
      fontSize: 14,
      width: 120,
      color: '#000000',
      marginVertical: 2,
      marginBottom: 5,
    },
    images: {
      height: 150,
      width: 150,
      marginLeft: 15,
      borderRadius: 5,
      marginBottom: 10,
    },
    reviewsStyle: {
      marginLeft: 15,
      fontSize: 12,
      color: '#8a8a5c',
    },
  });
  return (
    <View>
      <Image style={styles.images} source={{uri: imageUrl}} />
      <Text style={styles.restaurant}>{name}</Text>
      <Text style={styles.reviewsStyle}>
        {rating}
        {' stars  '}
        {reviews}
        {' reviews'}
      </Text>
    </View>
  );
}

export default ResultDetails;
