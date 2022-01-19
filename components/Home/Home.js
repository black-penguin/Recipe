import * as React from 'react';
import { Text, View, Button,ImageBackground, StyleSheet} from 'react-native';
const image = { uri: "https://wallpapercave.com/wp/wp1955108.jpg" };
const customData = require('../../customData.json');



export default function Home({ navigation }) {
  return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Button
                title="Recipe"
                style={styles.nav}
                onPress={() => navigation.navigate('RecList',{ data: customData}
              )} />
            <Button
                title="Shopping"
                style={styles.nav}
                onPress={() => navigation.navigate('Shopping')}
            />
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    },
    home: {
      flex: 1,
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
    //   textAlign: "center",
      backgroundColor: "#000000c0"
    },
  });
  