import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FancyCard from './FancyCard';
export default function MultiFancyCards() {
  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginLeft: 12}}>
        Trending Places
      </Text>
      <ScrollView horizontal={true}>
        <FancyCard
          src={
            'https://globalgrasshopper.com/wp-content/uploads/2011/01/Gadi-Sagar.jpg'
          }
          title={'Gadi Sagar'}
          location={'Jaisalmer, Rajasthan'}
          description={
            'The tank was built in 1367 by Maharawal Gadsi Singh, taking advantage of a natural declivity that already retained some water. It’s a waterfowl favourite in winter, but can almost dry up before the monsoon.'
          }
          footer={'12 mins away'}
        />
        <FancyCard
          src={
            'https://www.smartertravel.com/wp-content/uploads/2016/05/Jodhpur.jpg'
          }
          title={'MehranGarh Fort'}
          location={'Jodhpur, Rajasthan'}
          description={
            'Mehrangarh is a historic fort located in Jodhpur, Rajasthan, India. It stands on a hilltop, rising about 122 m (400 ft) above the surrounding plains, and the complex spans 1,200 acres (486 hectares).'
          }
          footer={'4hrs 19mins away'}
        />
        <FancyCard
          src={
            'https://www.tripsavvy.com/thmb/Afl1v6bgmGid9kPfseymDiAYWa0=/3595x2397/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-518387310-04a30994bfb1461bb8000f1864ca1fc5.jpg'
          }
          title={'Hawa Mahal'}
          location={'Jaipur, Rajasthan'}
          description={
            'The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women chambers.'
          }
          footer={'10hrs 14mins away'}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
