import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Conta({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Perfil</Text>
                </View>
                <View style={styles.profile}>
                    <AntDesign name="user" size={50} color="#000" />
                    <Text style={styles.profileName}>Bruno B.</Text>
                </View>
                <TouchableOpacity style={styles.menuItem}>
                    <AntDesign name="user" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Minha Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <AntDesign name="profile" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Meus Anúncios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <AntDesign name="shoppingcart" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Minhas Compras</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <AntDesign name="hearto" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <AntDesign name="customerservice" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Central de Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <AntDesign name="filetext1" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Termo de Uso</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <AntDesign name="logout" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#FF7F27',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    profile: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileName: {
        fontSize: 18,
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuItemText: {
        fontSize: 16,
        marginLeft: 20,
    },
});