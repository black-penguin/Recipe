import * as React from 'react';
import { Text, ImageBackground, Button, StyleSheet} from 'react-native';

const image = { uri: "https://wallpapercave.com/wp/wp1955108.jpg" };


export default function RecList({route, navigation }) {
  const data = route.params.data.recipeList;
  const list = () => {
    return data.map((element, key) => {
      return (
            <Button key={key}
                title={element.name}
                onPress={() => navigation.navigate('Recipe',{ data: element})}
            />
        );
      });
    }
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {list()}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    }
  })