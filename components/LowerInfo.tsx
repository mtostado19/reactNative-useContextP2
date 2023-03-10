import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import { User, UserContext } from '../imports/userContext'

export default function LowerInfo() {

  const { id, telefono } = useContext<User>(UserContext)

  return(
    <View style={styles.viewColums}>
        <View style={styles.viewColumsInfo}>
            <View style={styles.styleColumsInfo}>
                <Text style={styles.titleText}>Id</Text>
                <Text style={styles.infoText}> {id} </Text>
            </View>
            <View style={styles.styleColumsInfo}>
                <Text style={styles.titleText}>Telefono</Text>
                <Text style={styles.infoText}> {telefono} </Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewColums: {
    height: 70,
    width: '60%',
    alignItems: 'flex-start',
    marginBottom: 5,
    marginTop: 10,
  },
  viewColumsInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  styleColumsInfo: {
    alignItems: 'flex-start',
    borderRightWidth: 1,
    borderColor: 'grey',
    padding: 5,
  },
  titleText: {
    fontSize: 15,
    marginBottom: 10,
    borderBottomWidth: 0.9,
    width: 80,
  },
  infoText: {
    fontSize: 10,
  },
});
