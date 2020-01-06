import React from 'react';
import {View, StyleSheet} from 'react-native';

import ImageDetail from '../components/ImageDetail';

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../assets/forest.jpg')}
      />
      <ImageDetail title="Beach" imageSource={require('../assets/beach.jpg')} />
      <ImageDetail
        title="Mountain"
        imageSource={require('../assets/mountain.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
