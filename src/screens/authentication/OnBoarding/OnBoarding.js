import React from 'react';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fonts from '../../../utils/Fonts';
const { height } = Dimensions.get("window")

export default function OnBoarding({ navigation }) {
    const ButtonSpacer = () => <View style={{ marginVertical: 10 }} />;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} resizeMode="contain" source={require("../../../assets/images/caixa.png")} />
            </View>

            <View style={{ paddingHorizontal: 10, paddingTop: 10 * 6 }}>
                <Text style={{ fontSize: 28, color: '#000', fontFamily: Fonts["poppins-bold"], textAlign: "center" }}>
                    Tudo o que você {"\n"}precisa e muito mais!
                </Text>
            </View>
            <View style={{
                paddingHorizontal: 10 * 4,
            }}>
                <View style={{ paddingHorizontal: 10 * 1, paddingTop: 10 * 3 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={{ backgroundColor: '#FE8330', padding: 6 * 2.0, borderRadius: 10 }}>
                        <Text style={{ fontFamily: Fonts["poppins-bold"], color: '#fff', fontSize: 18, textAlign: 'center' }}>Criar conta nova</Text>
                    </TouchableOpacity>
                    <ButtonSpacer />
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ backgroundColor: '#fff', padding: 6 * 2.0, borderRadius: 10, borderColor: "#FE8330", borderWidth: 1 }}>
                        <Text style={{ fontFamily: Fonts["poppins-bold"], color: '#FE8330', fontSize: 18, textAlign: 'center' }}>Iniciar sessão</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 280
    },
    image: {
        width: 150,
        height: 150,
    },
})