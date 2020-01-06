import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

const ImageDetail = ({title, imageSource}) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
