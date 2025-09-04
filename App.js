import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  Image,
  ScrollView,
  View,
} from 'react-native';

function App() {
  const [profeta, setProfeta] = useState(null);

  function exibirProfeta(nome) {
    setProfeta(nome);
  }

  function renderProfetaInfo() {
    let texto, imagemUrl;

    if (profeta === 'Isaías') {
      texto = 'Um profeta do Antigo Testamento...';
      imagemUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Congonhas_sanctuary_of_Bom_Jesus_statues_1.jpg/800px-Congonhas_sanctuary_of_Bom_Jesus_statues_1.jpg';
    } else if (profeta === 'Jonas') {
      texto = 'Ocupando posição simétrica...';
      imagemUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Profetas_-_Aleijadinho_%2826602366691%29.jpg/800px-Profetas_-_Aleijadinho_%2826602366691%29.jpg';
    } else if (profeta === 'Jeremias') {
      texto = 'Jeremias é conhecido como o "profeta chorão"...';
      imagemUrl =
        'https://upload.wikimedia.org/wikipedia/commons/d/d6/Congonhas_sanctuary_of_Bom_Jesus_statues_2.jpg';
    } else if (profeta === 'Daniel') {
      texto = 'Daniel foi um profeta do cativeiro babilônico...';
      imagemUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Congonhas_sanctuary_of_Bom_Jesus_prophet_Daniel.jpg/800px-Congonhas_sanctuary_of_Bom_Jesus_prophet_Daniel.jpg';
    } else if (profeta === 'Ezequiel') {
      texto = 'Ezequiel teve visões profundas sobre o exílio...';
      imagemUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/EzequielProfeta.jpg/800px-EzequielProfeta.jpg';
    }

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.paragraph}>Quem foi {profeta}?</Text>
        <Image style={styles.image} source={{ uri: imagemUrl }} />
        <Text style={styles.text}>{texto}</Text>
        <Button title="Voltar" onPress={function () { setProfeta(null); }} color="#FF6347" />
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {!profeta ? (
        <>
          <Text style={styles.title}>Profetas</Text>
          <View style={styles.buttonContainer}>
            <Button title="Ver Isaías" onPress={function () { exibirProfeta('Isaías'); }} color="#4CAF50" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Ver Jonas" onPress={function () { exibirProfeta('Jonas'); }} color="#4CAF50" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Ver Jeremias" onPress={function () { exibirProfeta('Jeremias'); }} color="#4CAF50" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Ver Daniel" onPress={function () { exibirProfeta('Daniel'); }} color="#4CAF50" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Ver Ezequiel" onPress={function () { exibirProfeta('Ezequiel'); }} color="#4CAF50" />
          </View>
        </>
      ) : (
        renderProfetaInfo()
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    margin: 12,
    fontSize: 16,
    textAlign: 'justify',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  buttonContainer: {
    marginBottom: 10,
    width: '80%',
  },
});

export default App;