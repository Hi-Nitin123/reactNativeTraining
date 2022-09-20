import React from 'react';
import {Text, View, StyleSheet, Image, use} from 'react-native';

const Profile = ({route, navigation}) => {
  const {imageSource, name} = route.params;

  const styles = StyleSheet.create({
    myImage: {
      marginVertical: 50,
      borderRadius: 150,
      height: 280,
      width: 300,
      marginLeft: 50,
    },
    textStyling: {
      color: 'gray',
      marginVertical: -18,
      marginLeft: 55,
      fontSize: 22,
    },
    backgroundImage: {
      backgroundColor: '#3366ff',
      height: '100%',
    },
  });

  return (
    <View style={styles.backgroundImage}>
      <Image source={imageSource} style={styles.myImage} />
      <Text style={styles.textStyling}>Hey {name} What's on your mind</Text>
    </View>
  );
};

export default Profile;
