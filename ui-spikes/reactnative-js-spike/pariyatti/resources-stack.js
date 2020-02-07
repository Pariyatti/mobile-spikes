import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

class ResourcesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Resources!</Text>
        <Text></Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('ResourceDetails')}
        />
      </View>
    );
  }
}

class ResourceDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Resource Details!</Text>
      </View>
    );
  }
}

export const ResourcesStack = createStackNavigator({
  Resources: {
    screen: ResourcesScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  ResourceDetails: { screen: ResourceDetailsScreen },
});
