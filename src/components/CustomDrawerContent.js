import { AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { db } from '../config/firebaseConfig';
import Fonts from '../utils/Fonts';

const CustomDrawerContent = (props) => {
    const { navigation } = props;
    const [userInfo, setUserInfo] = useState({ name: '', email: '' });
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

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <AntDesign name="user" size={50} color="#fff" />
                {user ? (
                    <>
                        <Text style={styles.headerText}>{userInfo.apelido || 'Usuário'}</Text>
                        <Text style={styles.headerTextEmail}>{userInfo.email || 'email@example.com'}</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.headerText}>Entre na sua conta</Text>
                        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginButtonText}>Entrar</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FE8330',
        padding: 20,
        alignItems: 'center',
        marginTop: -4
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: Fonts['poppins-bold'],
        marginVertical: 3,
    },
    headerTextEmail: {
        color: '#fff',
        fontSize: 12,
        fontFamily: Fonts['poppins-regular'],
        marginVertical: 5,
    },
    loginButton: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    loginButtonText: {
        color: '#FE8330',
        fontSize: 16,
    },
});

export default CustomDrawerContent;
