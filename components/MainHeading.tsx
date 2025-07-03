import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainHeading = (props: { title: string }) => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default MainHeading;
