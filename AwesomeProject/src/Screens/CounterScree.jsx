import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const styles = StyleSheet.create({
    increaseButton: {
      backgroundColor: 'green',
      height: 40,
      fontSize: 20,
      width: 100,
    },
    decreaseButton: {
      backgroundColor: 'red',
      fontSize: 20,
      height: 40,
      width: 100,
    },
  });

  return (
    <View>
      <TouchableOpacity
        onPress={() => setCounter(count => count + 1)}
        style={styles.increaseButton}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCounter(count => count - 1)}
        style={styles.decreaseButton}>
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>Counter - {counter}</Text>
    </View>
  );
};

export default CounterScreen;
