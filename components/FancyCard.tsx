import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard(props) {
  return (
    <View>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: props.src,
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.location}>{props.location}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <Text style={styles.footer}>{props.footer}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 350,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 150,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  location: {color: 'black', marginBottom: 8, fontWeight: 'semibold'},
  description: {color: 'black'},
  footer: {color: 'black', marginTop: 8},
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
});
