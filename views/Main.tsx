import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LowerInfo from '../components/LowerInfo';
import MidInfo from '../components/MidInfo';
import TopBanner from '../components/TopBanner';

export default function Main() {
  return (
    <View style={styles.containerMain}>
      <View style={styles.styleBorder}>
        <TopBanner/>
        <MidInfo/>
        <LowerInfo/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    height: '100%'
  },
  styleBorder: {
    borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%'
  }
});
