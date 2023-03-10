import { StyleSheet, Text, View } from 'react-native';

export default function TopBanner() {
  return(
    <View style={styles.topStyle}>
      <Text style={styles.topLetters}>Company logo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topStyle: {
    backgroundColor: 'red',
    height: 130,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  topLetters: {
    color: 'white',
    fontSize: 25,
  }
});
