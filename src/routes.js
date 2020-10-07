import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/main'
import Details from './pages/details';

const Stack = createStackNavigator()

export default  Routes=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Pokemons" component={Main}/>
                <Stack.Screen name="Description" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}