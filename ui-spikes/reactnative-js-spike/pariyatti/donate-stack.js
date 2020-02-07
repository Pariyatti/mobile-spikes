import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class DonateScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Donate...</Text>
      </View>
    );
  }
}

export const DonateStack = createStackNavigator({
  Donate: {
    screen: DonateScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});