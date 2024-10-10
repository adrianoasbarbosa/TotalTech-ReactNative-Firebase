import React from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const MinhaContaScreen = () => {
  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Minha Conta</Text>

      {/* Foto de perfil */}
      <View style={styles.profilePicture}>
        <Text style={styles.profilePictureText}>160 x 160</Text>
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
};

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

export default MinhaContaScreen;
