import { AntDesign } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Fonts from '../../../utils/Fonts';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('DrawerApp');
            })
            .catch((error) => {
                const errorMessage = error.message;
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao entrar',
                    text2: errorMessage,
                });
            });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Entrar</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
                        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <TouchableOpacity onPress={() => navigation.navigate('DrawerApp')} style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>Entrar</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                        <Text style={styles.signupText1}>Não tem uma conta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                            <Text style={styles.signupText}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        backgroundColor: '#FE8330',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 16,
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 16,
        fontFamily: Fonts["poppins-bold"]
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
        marginBottom: 26,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontFamily: Fonts["poppins-regular"]
    },
    forgotPassword: {
        color: '#FE8330',
        textAlign: 'right',
        marginBottom: 20,
        fontFamily: Fonts["poppins-regular"]
    },
    loginButton: {
        backgroundColor: '#FE8330',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: Fonts["poppins-bold"]
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupText: {
        color: '#FE8330',
        fontFamily: Fonts["poppins-regular"]
    },
    signupText1: {
        color: '#000',
        fontFamily: Fonts["poppins-regular"]
    }
});
