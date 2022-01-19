import * as React from 'react';
import { Text, View, Button} from 'react-native';

export default function RecList({route, navigation }) {
  const data = route.params.data.recipeList;
  const list = () => {
    return data.map((element) => {
      return (
            <Button key={element.key}
                title={element.name}
                onPress={() => navigation.navigate('Recipe',{ data: element})}
            />
        );
      });
    }
  return (
    <View>
            {list()}
    </View>
  );
}