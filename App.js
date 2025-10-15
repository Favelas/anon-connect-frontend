// anon-connect-frontend/App.js

import React from 'react';
// 1. Importa los componentes de navegación necesarios
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 2. Importa la pantalla de Login que creaste
import LoginScreen from './src/screens/LoginScreen'; 

// 3. Crea una instancia del Navegador Stack
const Stack = createStackNavigator();

// 4. Componente principal de la aplicación
export default function App() {
  return (
    // Contenedor principal que maneja el estado de la navegación
    <NavigationContainer>
      
      {/* El Stack Navigator define las pantallas disponibles y la pantalla inicial */}
      <Stack.Navigator 
        // Indica qué pantalla se debe mostrar al iniciar la aplicación
        initialRouteName="Login"
      >
        
        {/* 5. Definición de la pantalla Login */}
        <Stack.Screen 
          name="Login"               // Nombre de la ruta (usado para navigation.navigate)
          component={LoginScreen}    // El componente React asociado (nuestro LoginScreen.js)
          options={{ title: 'Iniciar Sesión' }} 
        />
        
        {/* 6. Rutas temporales para que los links internos no fallen */}
        {/* Estos usan temporalmente el LoginScreen hasta que creemos las pantallas Register y AliasGenerator */}
        <Stack.Screen 
          name="Register" 
          component={LoginScreen} 
          options={{ title: 'Registro' }} 
        />
        <Stack.Screen 
          name="AliasGenerator" 
          component={LoginScreen} 
          options={{ title: 'Generador de Alias' }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}