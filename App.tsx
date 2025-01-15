import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import RecipeInput from './src/components/RecipeInput';
import RecipeDisplay from './src/components/RecipeDisplay';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [recipe, setRecipe] = useState<string>('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>Gerador de Receitas</Text>
          <RecipeInput onGenerateRecipe={setRecipe} />
          <RecipeDisplay recipe={recipe} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;