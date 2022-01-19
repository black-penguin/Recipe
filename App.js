// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import RecList from './components/RecList/RecList';
import Recipe from './components/RecList/Recipe/Recipe';
import Shopping from './components/Shopping/Shopping';

const customData = require('./customData.json');

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: customData.name }}/>
        <Stack.Screen name="RecList" component={RecList} options={{title:'Recipe List'}}/>
        <Stack.Screen name="Shopping" component={Shopping} options={{title:'Shopping List'}}/>
        <Stack.Screen name="Recipe" component={Recipe} options={{title:'Cake'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;