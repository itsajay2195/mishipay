import 'react-native-gesture-handler';
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {LOGGED_IN_SCREEN_NAME} from '../constants/screenConstants';
import AppContextProvider from '../context/AppContext';

function RootNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <AppContextProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
            style={{flex: 1}}>
            <Stack.Navigator>
              <Stack.Screen
                name={LOGGED_IN_SCREEN_NAME.home}
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={LOGGED_IN_SCREEN_NAME.details}
                component={DetailsScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </AppContextProvider>
  );
}

export default RootNavigation;
