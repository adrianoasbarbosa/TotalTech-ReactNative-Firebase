import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Gabinetes = () => {
    const [gabinetes, setGabinetes] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('gabinetes').onSnapshot((snapshot) => {
            const gabinetesData = [];
            snapshot.forEach((doc) => {
                gabinetesData.push({ ...doc.data(), id: doc.id });
            });
            setGabinetes(gabinetesData);
        });
        return unsubscribe;
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gabinetes</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.gabineteContainer}>
                    {gabinetes.map((gabinete) => (
                        <TouchableOpacity key={gabinete.id} style={styles.gabineteItem} onPress={() => { /* Ação ao clicar */ }}>
                            <Image source={{ uri: gabinete.imagem }} style={styles.gabineteImage} />
                            <Text style={styles.gabineteName}>{gabinete.nome}</Text>
                            <Text style={styles.gabinetePrice}>R$ {gabinete.preco}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    gabineteContainer: {
        flexDirection: 'row',
    },
    gabineteItem: {
        width: 150,
        marginRight: 10,
        alignItems: 'center',
    },
    gabineteImage: {
        width: 100,
        height: 100,
    },
    gabineteName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    gabinetePrice: {
        fontSize: 14,
    },
});

export default Gabinetes;