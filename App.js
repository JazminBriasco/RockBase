import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalColors } from './utils/_colors';
import { PagesConst } from './utils/_const';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
import Rooms from './screens/Rooms';
import Profile from './screens/Profile';
import AddRoom from './screens/AddRoom';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function OverviewScreen() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalColors.colors.primary1 },
        headerTitleStyle: { color: GlobalColors.colors.white },
        tabBarStyle: { backgroundColor: GlobalColors.colors.primary5 },
        tabBarActiveTintColor: GlobalColors.colors.primary2,
      }}
    >
      <BottomTabs.Screen name={PagesConst.HOME} component={Home}/>
      <BottomTabs.Screen name={PagesConst.ROOMS} component={Rooms}/>
      <BottomTabs.Screen name={PagesConst.PROFILE} component={Profile} />
      <BottomTabs.Screen name={PagesConst.LOGIN} component={Login} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={PagesConst.ROCKZONE} component={OverviewScreen}
              options={{
                headerStyle: { backgroundColor: GlobalColors.colors.primary5 },
                headerTitleStyle: { color: 'white' }
              }} />
            <Stack.Screen name={PagesConst.LOGIN} component={Login} />
            <Stack.Screen name={PagesConst.HOME} component={Home} />
            <Stack.Screen name={PagesConst.PROFILE} component={Profile} />
            <Stack.Screen name={PagesConst.ROOMS} component={Rooms} />
            <Stack.Screen name={PagesConst.ADDROOM} component={AddRoom}
              options={{
                headerStyle: { backgroundColor: GlobalColors.colors.primary5 },
                headerTitleStyle: { color: 'white' }
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

