import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';

const App = () => {
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Minha Conta</Text>
      </View>

      <View style={styles.profilePicContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/120' }}
          style={styles.profilePic}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}><Text style={styles.label}>Nome:</Text> Bruno Brasil</Text>
        <Text style={styles.infoText}><Text style={styles.label}>Email:</Text> brunosai2005@gmail.com</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Alterar conta</Text>
        </TouchableOpacity>
      </View>
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
  profilePicContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeButton: {
    width: '48%',
    padding: 10,
    backgroundColor: '#FFF0E0',
    alignItems: 'center',
    borderRadius: 8,
  },
  homeButtonText: {
    color: '#FF7F00',
    fontSize: 18,
  },
  editButton: {
    width: '48%',
    padding: 10,
    backgroundColor: '#FF7F00',
    alignItems: 'center',
    borderRadius: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;