import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RecipeDisplayProps {
  recipe: string;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{recipe || 'Sua receita aparecerá aqui'}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});

export default RecipeDisplay;