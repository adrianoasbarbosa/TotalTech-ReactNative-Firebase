import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, View, Dimensions } from 'react-native';
import { auth } from '../../../config/firebaseConfig';

export default function Splash({ navigation }) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            const unsubscribe = onAuthStateChanged(auth, user => {
                if (user) {
                    navigation.navigate('DrawerApp');
                } else {
                    navigation.navigate('OnBoarding');
                }
            });
            return () => unsubscribe();
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/images/logo.png')}
                style={styles.image}
            />
            <ActivityIndicator size="large" color="#fff" style={styles.loader} />
        </View>
    );
};

const { width, height } = Dimensions.get('window'); // Obter dimensões da tela

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FE8330",
    },
    image: {
        width: width * 0.8,  // 80% da largura da tela
        height: height * 0.4, // 40% da altura da tela
        resizeMode: 'contain',
    },
    loader: {
        position: 'absolute',
        bottom: 100,
    },
});
