import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.cards, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  cards: {
    width: 100,
    height: 100,
    margin: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
