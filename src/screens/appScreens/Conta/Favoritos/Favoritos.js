import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Anunciar from '../screens/appScreens/Anunciar/Anunciar';
import Compras from '../screens/appScreens/Compras/Compras';
import Conta from '../screens/appScreens/Conta/Conta';
import Inicio from '../screens/appScreens/Inicio/Inicio';
import Tutorial from '../screens/appScreens/Tutorial/Tutorial';
 
function Favoritos() {
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
        <TouchableOpacity onPress={() => {}}>
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
 
const Stack = createStackNavigator();
function Routes() {
  return (
    <Stack.Navigator initialRouteName='Inicio' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerApp" component={DrawerApp} />
    </Stack.Navigator>
  );
}
 
const Drawer = createDrawerNavigator();
function DrawerApp() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#FE8330',
        drawerInactiveTintColor: '#000',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inicio" component={Inicio} />
      <Drawer.Screen name="Anunciar" component={Anunciar} />
      <Drawer.Screen name="Compras" component={Compras} />
      <Drawer.Screen name="Conta" component={Conta} />
      <Drawer.Screen name="Tutorial" component={Tutorial} />
      <Drawer.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          drawerIcon: ({ focused, size }) => (
            <AntDesign name="staro" size={size} color={focused ? '#FE8330' : '#000'} />
          ),
        }}
      />
    </Drawer.Navigator>
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
 
export default Routes;