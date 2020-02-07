import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TodayStack } from './today-stack.js';
import { ResourcesStack } from './resources-stack.js';
import { AccountStack } from './account-stack.js';
import { DonateStack } from './donate-stack.js';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

const routeToIcon = {
  "Today": "ios-book",
  "Resources": "ios-book",
  "Account": "ios-person",
  "Donate": "ios-heart"
};

let Navigation = createAppContainer(
  createBottomTabNavigator(
    {
      Today: { screen: TodayStack },
      Resources: { screen: ResourcesStack },
      Account: { screen: AccountStack },
      Donate: { screen: DonateStack },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName = routeToIcon[routeName];

          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  ));

export default () => {
  const theme = Appearance.getColorScheme();

  return (
    <AppearanceProvider>
      <Navigation theme={theme} />
    </AppearanceProvider>
  )
}