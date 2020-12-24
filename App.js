import * as React from 'react';
import {  View, Text,ImageBackground,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'galio-framework';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';



const bannerSuperiorID = "ca-app-pub-8454341646863233/2501213715";

function HomeScreen({ navigation }) {
  return (
      <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/x8Rk8mA.png'}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <BannerAd
                unitId={bannerSuperiorID}
                     size={BannerAdSize.FULL_BANNER}
                     requestOptions={{
                       requestNonPersonalizedAdsOnly: true,
                     }}
                   />

      <Button round size="small" onPress={() => navigation.navigate('Mad')} color="#436DD5" style={{ marginTop: 450, }}>FLIP</Button>

    </View>
      </ImageBackground>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/Ddx5QwS.png'}}>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <BannerAd
              unitId={bannerSuperiorID}
                   size={BannerAdSize.FULL_BANNER}
                   requestOptions={{
                     requestNonPersonalizedAdsOnly: true,
                   }}
                 />

    <Button round size="small" onPress={() => navigation.navigate('Happy')} color="#436DD5" style={{ marginTop: 450, }}>FLIP</Button>

  </View>
    </ImageBackground>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Happy" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Mad" component={DetailsScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5FCFF',
    paddingTop: 50,

  },


  backgroundImage: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
  },

    topBox: {
      textAlign: 'center', // <-- the magic
      marginTop: 10,
      color: "#3658DE",
        fontSize: 41,
    },
      topBox2: {
        textAlign: 'center', // <-- the magic
          fontSize: 16,
          color: "white",
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
      }
});

export default App;
