import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Scrollable Cards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.cards, styles.cardTwo]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.cards, styles.cardThree]}>
          <Text>To</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>View</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>More..</Text>
        </View>
        <View style={[styles.cards, styles.cardOne]}>
          <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  container: {
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
    marginHorizontal: 8,
  },
  cardOne: {
    backgroundColor: '#BAADC2',
  },
  cardTwo: {
    backgroundColor: '#BAADC2',
  },
  cardThree: {
    backgroundColor: '#BAADC2',
  },
});
