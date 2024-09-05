import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fonts from '../../../utils/Fonts';

export default function Compras({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="#fff" onPress={() => {/* Add navigation back action here */ }} />
                <Text style={styles.headerText}>Carrinho</Text>
            </View>
            <View style={styles.emptyCart}>
                <AntDesign name="frowno" size={100} color="#ccc" />
                <Text style={styles.emptyCartText}>Nenhum produto no carrinho</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#FE8330',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 15,
        fontFamily: Fonts['poppins-bold'],
        marginBottom: -5,
    },
    emptyCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        fontSize: 16,
        color: '#ccc',
        marginTop: 20,
    },
});