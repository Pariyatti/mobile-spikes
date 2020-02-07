import React from 'react';
import { StyleSheet, Button, Text, Image } from 'react-native';
import { ScrollView } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Constants from 'expo-constants';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import Moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text> {Moment(new Date()).format('dddd, Do MMMM')} </Text>
          <Text>Today</Text>
          <Text>(I18N) {i18n.t('welcome')} Pariyatti!</Text>
          <Button
            title="Go to Resources"
            onPress={() => this.props.navigation.navigate('Resources')}
          />
          <Text style={styles.text}>
            With good will for the entire cosmos,
            cultivate a limitless heart:
            Above, below, and all around,
            unobstructed, without hostility or hate.
        </Text>
          <Image
            style={{ width: 150, height: 150 }}
            source={require('./resources/goenka.jpeg')}
          />
          <Text style={styles.text}>
            This is the law of nature,
            which no one can escape:
            a defiled mind remains agitated,
            an unstained mind is happy.
        </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export const TodayStack = createStackNavigator({
  Today: {
    screen: TodayScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});
