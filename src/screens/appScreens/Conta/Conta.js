import { AntDesign } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { db } from '../../../config/firebaseConfig';

export default function Conta({ navigation }) {

    const [userInfo, setUserInfo] = useState({ apelido: '', email: '' });
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const fetchUserInfo = async () => {
            if (user) {
                try {
                    const userDoc = await getDoc(doc(db, 'Users', user.uid));
                    if (userDoc.exists()) {
                        setUserInfo(userDoc.data());
                    }
                } catch (error) {
                    console.error('Erro ao buscar informações do usuário:', error);
                }
            }
        };

        fetchUserInfo();
    }, [user]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigation.navigate('OnBoarding'); // Redireciona para a tela de login após o logout
        } catch (error) {
            console.error('Erro ao sair:', error);
            Alert.alert('Erro', 'Não foi possível desconectar. Tente novamente mais tarde.'); // Apenas exibe um erro se houver
        }
    };



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    {/* Botão de voltar */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="arrowleft" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Perfil</Text>
                </View>
                <View style={styles.profile}>
                    <AntDesign name="user" size={50} color="#000" />
                    <Text style={styles.profileName}>{userInfo.apelido || 'Usuário'}</Text>
                    <Text style={styles.headerTextEmail}>{userInfo.email || 'email@example.com'}</Text>
                </View>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('MinhaConta')} // Adicione navegação
                >
                    <AntDesign name="user" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Minha Conta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('MeusAnúncio')} // Adicione navegação
                >
                    <AntDesign name="profile" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Meus Anúncios</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('MinhasCompras')} // Adicione navegação
                >
                    <AntDesign name="shoppingcart" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Minhas Compras</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('Favoritos')} // Adicione navegação
                >
                    <AntDesign name="hearto" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('CentralAjuda')} // Adicione navegação
                >
                    <AntDesign name="customerservice" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Central de Ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('TermoUso')} // Adicione navegação
                >
                    <AntDesign name="filetext1" size={30} color="#000" />
                    <Text style={styles.menuItemText}>Termo de Uso</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={handleLogout} // Adicione a função de logout
                >
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
    backButton: {
        padding: 10,
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
