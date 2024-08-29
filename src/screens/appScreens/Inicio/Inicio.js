import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importa o hook useNavigation
import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Inicio() {
    const navigation = useNavigation(); // Obtém o objeto de navegação

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar backgroundColor={"#FE8330"} />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
                        <AntDesign name="menu-fold" size={24} color="white" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar"
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity style={styles.searchIcon}>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.cepContainer}>
                    <Text style={styles.cepText}>Informe seu CEP</Text>
                </View>
                <View style={styles.bannerWrapper}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.bannerContainer}
                    >
                        <Image
                            source={{ uri: 'https://via.placeholder.com/400x150' }}
                            style={styles.bannerImage}
                        />
                        <Image
                            source={{ uri: 'https://via.placeholder.com/400x150' }}
                            style={styles.bannerImage}
                        />
                        <Image
                            source={{ uri: 'https://via.placeholder.com/400x150' }}
                            style={styles.bannerImage}
                        />
                    </ScrollView>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
                    <View style={styles.category}>
                        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Gabinetes</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Celulares e Smartphones</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Placas de Vídeo</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Placas Mãe</Text>
                    </View>
                </ScrollView>
                <View style={styles.productsContainer}>
                    <Text style={styles.sectionTitle}>Mais vistos no mundo em Gabinetes</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.productCard}>
                            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
                            <Text style={styles.productName}>Gabinete Gamer</Text>
                            <Text style={styles.productPrice}>R$ 219,90</Text>
                        </View>
                        <View style={styles.productCard}>
                            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
                            <Text style={styles.productName}>Gabinete Gamer</Text>
                            <Text style={styles.productPrice}>R$ 169,90</Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingBottom: 20,
    },
    header: {
        backgroundColor: '#FE8330',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    menuIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 40,
    },
    searchIcon: {
        marginLeft: 10,
    },
    cepContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    cepText: {
        color: '#999',
    },
    bannerWrapper: {
        alignItems: 'center',

    },
    bannerContainer: {
        justifyContent: 'center',
    },
    bannerImage: {
        width: 360,
        height: 150,
        borderRadius: 10,
        marginHorizontal: 23,
    },
    categoriesContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    category: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: '#eee',
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 12,
        textAlign: 'center',
    },
    productsContainer: {
        paddingHorizontal: 23,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    productCard: {
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    productImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    productName: {
        fontSize: 14,
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
