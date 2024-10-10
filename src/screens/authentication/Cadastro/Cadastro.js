import { AntDesign } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { auth, db } from '../../../config/firebaseConfig';
import Fonts from '../../../utils/Fonts';

export default function Cadastro({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [apelido, setApelido] = useState("");
    const [cpf, setCpf] = useState("");

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleCadastro = () => {
        if (senha !== confirmarSenha) {
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: 'As senhas não coincidem. Por favor, tente novamente.',
            });
            return;
        }

        createUserWithEmailAndPassword(auth, email, senha)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const userId = user.uid;
                await setDoc(doc(db, "Users", userId), {
                    email: email,
                    senha: senha,
                    apelido: apelido,
                    cpf: cpf
                });
                // Limpar os campos após o cadastro
                setEmail('');
                setSenha('');
                setConfirmarSenha('');
                setApelido('');
                setCpf('');
                // Navegar para a tela de login
                navigation.navigate('Login');
                Toast.show({
                    type: 'success', // Correção feita aqui
                    text1: 'Sucesso ao criar Conta',
                    text2: 'Parabéns por realizar o cadastro!',
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                Toast.show({
                    type: 'error',
                    text1: 'Erro',
                    text2: errorMessage,
                });
            });
    };
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Cadastrar</Text>
                </View>
                <Text style={styles.infoText}>
                    Nos informe alguns dados para que possamos melhorar a sua experiência!
                </Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Apelido</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Exemplo: Bruno B."
                        value={apelido}
                        onChangeText={setApelido}
                        autoCapitalize="words"
                    />
                    <Text style={styles.label}>CPF</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu CPF"
                        value={cpf}
                        onChangeText={setCpf}
                        keyboardType="numeric"
                    />
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
                        placeholder="Use letras, números e caracteres especiais."
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Confirmar senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme sua senha"
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.registerButton} onPress={handleCadastro}>
                        <Text style={styles.registerButtonText}>Cadastre-se</Text>
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText1}>Já tem uma conta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.loginText}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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
        fontFamily: Fonts["poppins-bold"],
    },
    infoText: {
        padding: 16,
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        fontFamily: Fonts["poppins-regular"],
    },
    form: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontFamily: Fonts["poppins-regular"],
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontFamily: Fonts["poppins-regular"],
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
        fontFamily: Fonts["poppins-bold"],
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginText: {
        color: '#ff7f27',
        fontFamily: Fonts["poppins-regular"],
    },
    loginText1: {
        color: '#000',
        fontFamily: Fonts["poppins-regular"],
    },
});
