import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';

import { User, UserContext } from '../imports/userContext'

export default function MidInfo() {

  const { name, job, img} = useContext<User>(UserContext)

  return(
    <View style={styles.midStyle}>
      <View style={styles.midImage}>
        <Image style={styles.styleImg} source={{ uri: img}}/>
      </View>
      <View style={styles.viewInfo}>
        <View style={styles.viewInfoText}>
          <Text style={styles.nameLetters}> {name} </Text>
          <Text style={styles.jobLetters}> {job} </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  midStyle: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  midImage: {
    width: 150,
    alignItems: 'center',
  },
  viewInfo: {
    width: '50%',
    alignSelf: 'flex-end',
  },
  viewInfoText: {
    width: '90%',
    height: '100%',
    justifyContent: 'flex-start',
    padding: 25,
    alignItems: 'flex-end',
  },
  nameLetters: {
    color: 'black',
    fontSize: 15,
  },
  jobLetters: {
    color: 'black',
    fontSize: 10
  },
  styleImg: {
    height: 100,
    width: 100,
  },
});
