import { AntDesign } from '@expo/vector-icons';
import { sendPasswordResetEmail } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { auth, db } from '../../../../config/firebaseConfig';
import Fonts from '../../../../utils/Fonts';

export default function RecuperarSenha({ navigation }) {
    const [email, setEmail] = useState("");

    const handleForgot = async () => {
        if (!email) {
            Toast.show({
                type: 'error',
                text1: 'Campo obrigatório',
                text2: 'Por favor, insira o seu e-mail.',
            });
            return;
        }
        try {
            const userQuery = query(
                collection(db, 'Users'),
                where('email', '==', email)
            );
            const querySnapshot = await getDocs(userQuery);
            if (querySnapshot.empty) {
                Toast.show({
                    type: 'error',
                    text1: 'E-mail não encontrado',
                    text2: 'Este e-mail não está registrado. Verifique e tente novamente.',
                });
                return;
            }
            await sendPasswordResetEmail(auth, email);
            Toast.show({
                type: 'success',
                text1: 'Email Enviado',
                text2: 'Verifique seu email para redefinir sua senha',
            });
        } catch (error) {
            const errorMessage = error.message;
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: errorMessage,
            });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Recuperação de conta</Text>
            </View>
            <Text style={styles.infoText}>
                Esqueceu sua senha?
                Não se preocupe! Insira o seu e-mail de cadastro e enviaremos instruções para você.
            </Text>
            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <TouchableOpacity style={styles.registerButton} onPress={handleForgot}>
                    <Text style={styles.registerButtonText}>Receber instruções</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#ff7f27',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        marginLeft: 16,
        fontFamily: Fonts["poppins-bold"]
    },
    infoText: {
        padding: 18,
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        fontFamily: Fonts["poppins-regular"],
        marginHorizontal: 20
    },
    form: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontFamily: Fonts["poppins-regular"]
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontFamily: Fonts["poppins-regular"]
    },
    registerButton: {
        backgroundColor: '#ff7f27',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: Fonts["poppins-bold"]
    },
});
