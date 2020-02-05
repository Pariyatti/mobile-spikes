import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: { welcome: 'Hello' },
  ja: { welcome: 'こんにちは' },
  pl: { welcome: "Cześć" },
  hi: { welcome: "नमस्ते" }
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>(I18N) {i18n.t('welcome')} Pariyattssi!</Text>

        <TextInput
          style={{ height: 40, width: 200, color: "#FF9F33", backgroundColor: "#E1E1E1" }}

          placeholder="Input here"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 12 }}>
          I've just typed this: {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
