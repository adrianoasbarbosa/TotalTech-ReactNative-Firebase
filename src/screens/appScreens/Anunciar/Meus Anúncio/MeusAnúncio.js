import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const anuncios = [
  {
    id: '1',
    categoria: 'Gabinetes',
    nome: 'Gabinete Gamer Montech X3 MESH',
    preco: 'R$ 219,90',
    localizacao: 'Itu - São Paulo',
    imagem: 'https://example.com/gabinete.jpg'
  },
  {
    id: '2',
    categoria: 'Monitores',
    nome: 'Monitor Gamer XYZ 24" ',
    preco: 'R$ 299,90',
    localizacao: 'Itu - São Paulo',
    imagem: 'https://example.com/monitor.jpg'
  },
];

export default function MeusAnúncio({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderAnuncio = ({ item }) => (
    <TouchableOpacity
      style={styles.anuncioContainer}
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <Image source={{ uri: item.imagem }} style={styles.anuncioImagem} />
      <Text style={styles.nomeAnuncio}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
      <Text style={styles.localizacao}>{item.localizacao}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header com o botão Voltar */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Meus anúncios</Text>
      </View>

      {['Gabinetes', 'Monitores'].map(categoria => (
        <View key={categoria}>
          <Text style={styles.categoria}>{categoria}</Text>
          <FlatList
            data={anuncios.filter(anuncio => anuncio.categoria === categoria)}
            renderItem={renderAnuncio}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </View>
      ))}

      {/* Modal para exibir detalhes do anúncio */}
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{selectedItem.nome}</Text>
            <Image source={{ uri: selectedItem.imagem }} style={styles.modalImagem} />
            <Text style={styles.modalPreco}>{selectedItem.preco}</Text>
            <Text>{selectedItem.localizacao}</Text>

            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    padding: 15,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  categoria: {
    fontSize: 20,
    color: '#fff',
    margin: 10,
    marginLeft: 15,
  },
  anuncioContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  anuncioImagem: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  nomeAnuncio: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  preco: {
    color: 'green',
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  localizacao: {
    fontSize: 12,
    color: '#666',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  modalImagem: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  modalPreco: {
    color: 'green',
    fontSize: 18,
    marginBottom: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});