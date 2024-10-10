import React from 'react';
<<<<<<< HEAD
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
=======
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function MinhaConta({ navigation }) {
  const handleEditProfile = () => {
    Alert.prompt("Editar Perfil", "Digite o novo nome:", [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "OK",
        onPress: (name) => console.log("Novo nome:", name)
      }
    ]);
    navigation.navigate('Editar');
  };
>>>>>>> origin/main

const MinhaContaScreen = () => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Minha Conta</Text>

      {/* Foto de perfil */}
      <View style={styles.profilePicture}>
        <Text style={styles.profilePictureText}>160 x 160</Text>
=======
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Minha Conta</Text>
>>>>>>> origin/main
      </View>

      {/* Informações da conta */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Nome:</Text>
        <Text style={styles.infoText}>Bruno Brasil</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>brunosai2005@gmail.com</Text>
      </View>

      {/* Botão Alterar conta */}
      <TouchableOpacity style={styles.changeButton}>
        <Text style={styles.changeButtonText}>Alterar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 24,
    color: '#ff6600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profilePicture: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePictureText: {
    color: '#808080',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 15,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoText: {
    color: '#000',
  },
  changeButton: {
    marginTop: 40,
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  changeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
<<<<<<< HEAD

export default MinhaContaScreen;
=======
>>>>>>> origin/main
