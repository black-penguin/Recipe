import * as React from 'react';
import { Text, View, ScrollView, ImageBackground, StyleSheet, Button} from 'react-native';
const image = { uri: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-7.jpg" };


export default function Recipe({route}) {
  const data = route.params.data;
  return (
    <View>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ScrollView style={styles.recipe}>
                <Button
                    title="Add to Shopping List"
                    style={styles.nav}
                    onPress={() => navigation.navigate('Shopping')}
                />
                {console.log(data)}
                <Text style={styles.recipeTitle}>{data.name}</Text>
                <Text style={styles.recipeTitle}>Graham Cracker Crust</Text>
                <Text style={styles.recipe}>1 ½ cups graham cracker crumbs (170g)</Text>
                <Text style={styles.recipe}>2 Tablespoons sugar</Text>
                <Text style={styles.recipe}>1 Tablespoon brown sugar (can substitute white)</Text>
                <Text style={styles.recipe}>7 Tablespoons butter melted</Text>
                <Text style={styles.recipeTitle}>Cheesecake</Text>
                <Text style={styles.recipe}>32 oz cream cheese² softened to room temperature (910g)</Text>
                <Text style={styles.recipe}>1 cup sugar (200g)</Text>
                <Text style={styles.recipe}>⅔ cups sour cream (160g)</Text>
                <Text style={styles.recipe}>1 ½ teaspoons vanilla extract</Text>
                <Text style={styles.recipe}>⅛ teaspoon salt</Text>
                <Text style={styles.recipe}>4 large eggs room temperature, lightly beaten</Text>
                <Text style={styles.recipeTitle}>Rocommened Equipment</Text>
                <Text style={styles.recipe}>9" Springform pan</Text>
                <Text style={styles.recipe}>Mixing bowls</Text>

                <Text style={styles.recipeTitle}>Instructions</Text>
                <Text style={styles.recipe}>1. Preheat oven to 325F (160C).</Text>
                <Text style={styles.recipe}>2. Prepare Graham Cracker crust first by combining graham cracker crumbs, sugar, and brown sugar, and stirring well. Add melted butter and use a fork to combine ingredients well.</Text>
                <Text style={styles.recipe}>3. Pour crumbs into a 9” Springform pan and press firmly into the bottom and up the sides of your pan. Set aside.</Text>
                <Text style={styles.recipeTitle}>Instructions</Text>
                <Text style={styles.recipe}>1. In the bowl of a stand mixer or in a large bowl (using a hand mixer) add cream cheese and stir until smooth and creamy (don’t over-beat or you’ll incorporate too much air).</Text>
                <Text style={styles.recipe}>2. Add sugar and stir again until creamy.</Text>
                <Text style={styles.recipe}>3. Add sour cream, vanilla extract, and salt, and stir until well-combined. If using a stand mixer, make sure you pause periodically to scrape the sides and bottom of the bowl with a spatula so that all ingredients are evenly incorporated.</Text>
                <Text style={styles.recipe}>4. incorporated.
    With mixer on low speed, gradually add lightly beaten eggs, one at a time, stirring just until each egg is just incorporated. Once all eggs have been added, use a spatula to scrape the sides and bottom of the bowl again and make sure all ingredients are well combined.</Text>
                <Text style={styles.recipe}>5. Pour cheesecake batter into prepared springform pan. To insure against leaks, place pan on a cookie sheet that’s been lined with foil.</Text>
                <Text style={styles.recipe}>6. Transfer to the center rack of your oven and bake on 325F (160C) for about 75 minutes. Edges will likely have slightly puffed and may have just begun to turn a light golden brown and the center should spring back to the touch but will still be Jello-jiggly. Don't over-bake or the texture will suffer, which means we all suffer.</Text>
                <Text style={styles.recipe}>7. Remove from oven and allow to cool on top of the oven³ for 10 minutes. Once 10 minutes has passed, use a knife to gently loosen the crust from the inside of the springform pan (this will help prevent cracks as your cheesecake cools and shrinks).</Text>
                <Text style={styles.recipe}>8. Allow cheesecake to cool another 1-2 hours or until near room temperature before transferring to refrigerator and allowing to cool overnight or at least 6 hours. Enjoy!</Text>
            </ScrollView>

        </ImageBackground>
    </View>
  ); 
}
const styles = StyleSheet.create({
    image: {
      flex: 0,
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
        maxHeight: "50%"
        // overflow:"scroll"
    },
    recipe:{
        backgroundColor:"white",
        padding:5,
    }
  });