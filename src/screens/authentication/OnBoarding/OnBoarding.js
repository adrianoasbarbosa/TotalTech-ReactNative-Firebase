import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fonts from '../../../utils/Fonts';

const { height } = Dimensions.get("window");

export default function OnBoarding({ navigation }) {
    const ButtonSpacer = () => <View style={{ marginVertical: 10 }} />;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("DrawerApp")}
                >
                    <Text style={styles.enterWithoutAccount}>Entrar sem cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    resizeMode="contain"
                    source={require("../../../assets/images/caixa.png")}
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>
                    Tudo o que você {"\n"}precisa e muito mais!
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Cadastro")}
                        style={styles.createAccountButton}
                    >
                        <Text style={styles.createAccountText}>Criar conta nova</Text>
                    </TouchableOpacity>
                    <ButtonSpacer />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={styles.loginButton}
                    >
                        <Text style={styles.loginText}>Iniciar sessão</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    linkContainer: {
        alignItems: 'center',
        marginTop: 20, // Margem para separar do topo da tela
    },
    enterWithoutAccount: {
        fontFamily: Fonts["poppins-regular"],
        color: '#FE8330',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 200, // Aumentei um pouco o tamanho para centralizar melhor
        height: 200,
    },
    textContainer: {
        paddingHorizontal: 40,
        paddingTop: 20,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 28,
        color: '#000',
        fontFamily: Fonts["poppins-bold"],
        textAlign: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 40,
        paddingBottom: 20, // Adicionado padding para separar os botões do final da tela
    },
    buttonWrapper: {
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    createAccountButton: {
        backgroundColor: '#FE8330',
        paddingVertical: 12,
        borderRadius: 10,
    },
    createAccountText: {
        fontFamily: Fonts["poppins-bold"],
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    loginButton: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 10,
        borderColor: '#FE8330',
        borderWidth: 1,
    },
    loginText: {
        fontFamily: Fonts["poppins-bold"],
        color: '#FE8330',
        fontSize: 18,
        textAlign: 'center',
    },
});
