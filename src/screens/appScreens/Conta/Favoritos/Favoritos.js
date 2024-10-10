import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Favoritos({ navigation }) {
  const [favoritos, setFavoritos] = useState([
    { id: '1', nome: 'Item 1', preco: 'R$ 100,00' },
    { id: '2', nome: 'Item 2', preco: 'R$ 200,00' },
    { id: '3', nome: 'Item 3', preco: 'R$ 150,00' },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemPreco}>{item.preco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favoritos</Text>
      </View>

      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum item favorito.</Text>}
        contentContainerStyle={favoritos.length === 0 ? styles.emptyContainer : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FE8330',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemNome: {
    fontSize: 18,
    color: '#333',
  },
  itemPreco: {
    fontSize: 18,
    color: '#FE8330',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
    marginTop: 20,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});