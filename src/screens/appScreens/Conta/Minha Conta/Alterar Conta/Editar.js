import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Editar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Alterar Conta</Text>
      </View>

      {/* Seção de Alteração de Foto */}
      <View style={styles.photoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profilePhoto}
        />
        <TouchableOpacity style={styles.changePhotoButton}>
          <Text style={styles.changePhotoButtonText}>Alterar Foto</Text>
        </TouchableOpacity>
      </View>

      {/* Formulário */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Alterar Nome"
        />
        <TextInput
          style={styles.input}
          placeholder="exemplo@gmail.com"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="****"
          secureTextEntry
        />
      </View>

      {/* Botão de Confirmação */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar conta</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FF7F00',
  },
  headerText: {
    fontSize: 24,
    color: '#FF7F00',
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#d3d3d3',
  },
  changePhotoButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 8,
  },
  changePhotoButtonText: {
    color: '#555555',
    fontSize: 16,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#FF7F00',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});