import * as React from 'react';
import { Text, View, Button} from 'react-native';
const data = require('../../customData.json');

export default function Shopping() {
  const shoppingList = () => {
    return data.shopping.map((element, key) => {
      return (
          <Text key={key}>{element}</Text>
        );
      });
    }
    const resetList = () => {
      console.log("reset data");
      let reset=["pie"];
      // data.writeFile('PartyInfo.json', reset);

    }
    
  return (
    <View>
      <Button
                title="Clear Shopping List"
                onPress={resetList()}
            />
      {shoppingList()}
    </View>
  );
}