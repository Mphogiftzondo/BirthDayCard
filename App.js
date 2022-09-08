import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Image} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-web';
 


function Card({ navigation }) {
  const [shoot, setShoot] = useState(false);

  useEffect(() => {
    //Time out to fire the cannon
    setTimeout(() => {
      setShoot(true);
    }, 1000);
  }, []);
  return (
    
      <ImageBackground source={require('./assets/pexel.jpg')} style={styles.container}>
                <View >
                    <Text style={styles.text}> Happy BirthDay </Text>

                    <Text style={styles.text}>As we celebrate your latest trip around the sun, I can’t help but think of the light you shine on my life. Thank you for all you do, and may this be your best birthday yet.</Text>
                </View>
               
                {shoot ? (
          <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
        ) : null}
            </ImageBackground>
    
  );
}
function Home({ navigation }){
  return(
    <ImageBackground source={require('./assets/pexel.jpg')} style={styles.container}>
                <View >
                    <Text style={styles.text2}  >Click the gift</Text>
                    <TouchableOpacity  onPress={() => { navigation.navigate('Card')}}>
                    <Image
                   
                     
        style={styles.stretch}
        source={require('./assets/gift.png')}
      />
      </TouchableOpacity>
                    
                </View>
               
            </ImageBackground>
  )
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
        headerShown: false,
      }} />
        <Stack.Screen name="Card" component={Card} options={{
        headerShown: false,
      }} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
},
text: {
    color: '#D4Af37',
    fontSize: 24,
    textAlign:'center',
    width:550,
},
text2: {
  color: '#D4Af37',
  fontSize: 84,
  textAlign:'center',
  width:550,
},
stretch:{
  width:550,
  height:550,
  alignItems:'center',
 
}
});
