import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';

import Inicio from './pages/inicio';
import Produtos from './pages/produtos';

const Stack = createStackNavigator();

const generalScreenOptions = {
    gestureEnabled: false,
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="InicioNavigator" screenOptions={{...generalScreenOptions}}>
                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                    options={{ title: 'Inicio' }}
                />
                <Stack.Screen
                    name="Produtos"
                    component={Produtos}
                    options={{ title: 'Produtos' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}