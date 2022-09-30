import React, {useState, useEffect} from 'react';
import {Text, FlatList, Image, View, StyleSheet} from 'react-native';
import yelp from '../Api/yelp';

const ResultScreen = ({route, navigation}) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
  console.log(id, 'SHowId');
  const showImages = async () => {
    try {
      const result = await yelp.get(`/${id}`);
      console.log(result.data, 'showResult');
      setResult(result.data.photos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showImages(id);
  }, []);
  if (!result) {
    return null;
  }

  const styles = StyleSheet.create({
    images: {
      height: 200,
      width: 300,
      marginVertical: 10,
    },
  });

  return (
    <View>
      <FlatList
        data={result}
        keyExtractor={ele => ele}
        renderItem={({item}) => {
          return (
            <View>
              <Image source={{uri: item}} style={styles.images} />
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default ResultScreen;
