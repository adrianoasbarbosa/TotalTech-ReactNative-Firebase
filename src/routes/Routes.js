import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FavoritosScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.navbarTitle}>Favoritos</Text>
      </View>
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Nenhum item favoritado</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f57c00',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButton: {
    color: '#fff',
    fontSize: 24,
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
  },
});

export default FavoritosScreen;
