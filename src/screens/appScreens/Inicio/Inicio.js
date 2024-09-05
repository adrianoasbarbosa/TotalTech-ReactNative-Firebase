// Inicio.js
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { db } from '../../../config/firebaseConfig';

export default function Inicio({ navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Anuncios')); // Nome da coleção
                const productsData = querySnapshot.docs.map(doc => doc.data());
                setProducts(productsData);
            } catch (error) {
                console.error("Erro ao buscar produtos: ", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <LinearGradient
            colors={['#FE8330', '#FFFFFF']}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.openDrawer()}
                >
                    <AntDesign name="menu-fold" size={24} color="#fff" />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <AntDesign name="search1" size={20} color="#000" style={styles.searchIcon} />
                    <Text style={styles.searchInput}>Buscar</Text>
                </View>
                <TouchableOpacity style={styles.cartButton}>
                    <AntDesign name="shoppingcart" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.locationContainer}>
                <Image style={styles.locationIcon} />
                <Text style={styles.locationText}>Informe seu CEP</Text>
            </View>

            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryItem}>
                    <Image style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Gabinetes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryItem}>
                    <Image style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Celulares e Smartphones</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryItem}>
                    <Image style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Placa de Vídeo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryItem}>
                    <Image style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Placa Mãe</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Mais vistos no mundo em Gabinetes</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.productContainer}>
                    {products.map((product, index) => (
                        <ProductItem
                            key={index}
                            imageSrc={product.images[0]}
                            name={product.title}
                            price={product.price}
                            location={product.location}
                            description={product.description}
                            sellerName={product.sellerName}
                        />
                    ))}
                </View>
            </ScrollView>

            <Text style={styles.sectionTitle}>Processadores</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    menuButton: {
        marginRight: 16,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 20,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    cartButton: {},
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FE8330',
    },
    locationIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    locationText: {
        fontSize: 14,
    },
    categoryContainer: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#FE8330',
    },
    categoryItem: {
        flex: 1,
        alignItems: 'center',
        marginRight: 16,
    },
    categoryImage: {
        width: 80,
        height: 80,
    },
    categoryText: {
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 16,
        backgroundColor: '#fff',
    },
    productContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});
