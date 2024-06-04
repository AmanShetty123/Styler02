import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ElevatedCards from './ElevatedCards';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
          }}
          style={styles.cardImage}
          resizeMode="stretch"
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>
            On June 22 The ECMA International approved the latest version of the
            official specification ES12 aka ECMAScript 2021 by providing
            capabilities for strings, promises, classes and much more.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
              )
            }>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
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
  },
  card: {
    width: 300,
    height: 280,
    marginHorizontal: 12,
    marginVertical: 12,
    borderRadius: 8,
  },
  elevatedCard: {
    backgroundColor: 'orange',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 100,
  },
  bodyContainer: {
    padding: 10,
  },
  bodyText: {
    color: 'black',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'purple',
    fontSize: 16,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
