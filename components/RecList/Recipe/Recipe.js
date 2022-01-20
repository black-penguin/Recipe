import * as React from 'react';
import { Text, SafeAreaView, ScrollView, ImageBackground, StyleSheet, Button} from 'react-native';


export default function Recipe({route}) {
  const data = route.params.data;
  const image = { uri: data.image };
  const ingredients = () => {
    return data.recipe.ingredients.map((element, key) => {
      return (
          <Text key={key}>{element}</Text>
        );
      });
    }
    const instructions = () => {
      return data.recipe.instructions.map((element, key) => {
        return (
            <Text key={key}>{key+1}. {element}</Text>
          );
        });
      }
  return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ScrollView style={styles.recipe}>
                <Text style={styles.recipeTitle}>{data.name}</Text>
                {/* <Button
                    title="Add to Shopping List"
                    style={styles.nav}
                    onPress={() => navigation.navigate('Shopping')}
                /> */}
                <Text> </Text>
                <Text style={styles.recipeTitle}>Ingredients</Text>
                {ingredients()}
                <Text> </Text>
                <Text style={styles.recipeTitle}>Instructions</Text>
                {instructions()}
                <Text> </Text>
              </ScrollView>
        </ImageBackground>
  ); 
}
const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
      padding:20,
    },
    cake: {
      flex: 1,
    },
    recipeTitle:{
      backgroundColor:"white",
      textAlign:"center",
      fontWeight:"bold",
      flex: 1, 
      fontSize:20
    },
    recipe:{
      // flex:1,
      backgroundColor:"white",
      padding:10,
      height:200
    }
  });