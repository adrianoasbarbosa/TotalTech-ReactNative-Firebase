import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AlterarContaScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      
      {/* Navbar Laranja */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.navbarTitle}>Alterar Conta</Text>
      </View>

      {/* Foto de perfil */}
      <View style={styles.profilePicture}>
        <Text style={styles.profilePictureText}>96 x 96</Text>
      </View>

      {/* Botão de alterar foto */}
      <TouchableOpacity style={styles.alterPhotoButton}>
        <Text style={styles.alterPhotoButtonText}>Alterar Foto</Text>
      </TouchableOpacity>

      {/* Campos de input */}
      <View style={styles.inputContainer}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Alterar Nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="exemplo@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      {/* Botão Confirmar conta */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  navbar: {
    width: '100%',
    height: 60,
    backgroundColor: '#ff6600',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  navbarTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  profilePicture: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePictureText: {
    color: '#808080',
  },
  alterPhotoButton: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  alterPhotoButtonText: {
    color: '#808080',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
  },
  confirmButton: {
    marginTop: 30,
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AlterarContaScreen;

