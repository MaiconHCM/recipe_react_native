import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

interface RecipeInputProps {
  onGenerateRecipe: (recipe: string) => void;
}

const RecipeInput: React.FC<RecipeInputProps> = ({ onGenerateRecipe }) => {
  const [ingredients, setIngredients] = useState('');

  const generateRecipe = async () => {
    if (ingredients.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira algum ingrediente.');
      return;
    }

    try {
      const response = await axios.post('https://api.groq.com/v1/completions', {
        messages: [
          {
            role: "user",
            content: `Gere uma receita usando os seguintes ingredientes: ${ingredients}`
          }
        ],
        model: "llama3-8b-8192"
      }, {
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json'
        }
      });

      if (response.data && response.data.choices && response.data.choices[0].message.content) {
        onGenerateRecipe(response.data.choices[0].message.content);
      } else {
        throw new Error('Resposta inválida da API');
      }
    } catch (error) {
      console.error('Erro ao gerar receita:', error);
      Alert.alert('Erro', 'Ocorreu um problema ao gerar a receita. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setIngredients}
        value={ingredients}
        placeholder="Digite os ingredientes"
        multiline={true}
      />
      <Button title="Gerar Receita" onPress={generateRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  }
});

export default RecipeInput;