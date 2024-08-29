import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Tutorial({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backText}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Tutorial</Text>
            </View>
            <Text style={styles.subtitle}>
                Não sabe como montar seu computador ou não sabe as peças
            </Text>
            {['Placa Mãe', 'Processadores', 'Placa de Vídeo', 'Armazenamento', 'Memória', 'Gabinete'].map((item, index) => (
                <TouchableOpacity key={index} style={styles.option}>
                    <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF8C00',
        padding: 16,
    },
    backButton: {
        paddingRight: 8,
    },
    backText: {
        fontSize: 24,
        color: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 16,
    },
    option: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 18,
    },
});