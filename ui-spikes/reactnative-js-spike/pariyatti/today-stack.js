import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Moment from 'moment';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: { welcome: 'Hello' },
  ja: { welcome: 'こんにちは' },
  pl: { welcome: "Cześć" },
  hi: { welcome: "नमस्ते" }
}

class TodayScreen extends React.Component {  
  render() {
    Moment.locale(i18n.locale);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> {Moment(new Date()).format('dddd, Do MMMM')} </Text>
        <Text>Today</Text>
        <Text>(I18N) {i18n.t('welcome')} Pariyatti!</Text>
        <Button
          title="Go to Resources"
          onPress={() => this.props.navigation.navigate('Resources')}
        />
      </View>
    );
  }
}

export const TodayStack = createStackNavigator({
  Today: {
    screen: TodayScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});
