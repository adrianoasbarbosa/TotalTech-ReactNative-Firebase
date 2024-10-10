import { AntDesign } from '@expo/vector-icons';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, StatusBar, TextInput, RefreshControl } from 'react-native';
import { db } from '../../../config/firebaseConfig';

export default function Inicio({ navigation }) {
    const [products, setProducts] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false); // Estado para controle de refresh

    const fetchProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Anuncios'));
            const productsData = querySnapshot.docs.map(doc => ({
                id: doc.id,    // Inclui o ID do documento
                ...doc.data()  // Mantém os outros dados do documento
            }));
            setProducts(productsData);
        } catch (error) {
            console.error("Erro ao buscar produtos: ", error);
        }
    };

    const onRefresh = async () => {
        setIsRefreshing(true);
        await fetchProducts(); // Recarrega os produtos
        setIsRefreshing(false);
    };

    useEffect(() => {
        fetchProducts(); // Carrega os produtos na primeira vez
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                        colors={['#FE8330']}
                    />
                }
            >
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
                    <TouchableOpacity style={styles.searchIcon} onPress={() => navigation.navigate('Compras')}>
                        <AntDesign name="shoppingcart" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.cepContainer}>
                    <View style={styles.locationWrapper}>
                        <AntDesign name="enviromento" size={20} color="#FE8330" />
                        <Text style={styles.cepText}>Informe seu CEP</Text>
                    </View>
                </View>
                <View style={styles.bannerWrapper}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.bannerContainer}
                    >
                        <Image
                            source={require('../../../assets/images/banner.png')}
                            style={styles.bannerImage}
                        />
                    </ScrollView>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
                    <View style={styles.category}>
                        <Image source={require('../../../assets/images/1.png')} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Gabinetes</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={require('../../../assets/images/2.png')} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Celulares e Smartphones</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={require('../../../assets/images/3.png')} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Placas de Vídeo</Text>
                    </View>
                    <View style={styles.category}>
                        <Image source={require('../../../assets/images/4.png')} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>Placas Mãe</Text>
                    </View>
                </ScrollView>

                {/* Seção de Gabinetes */}
                <View style={styles.productsContainer}>
                    <Text style={styles.sectionTitle}>Mais vistos no mundo em Gabinetes</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsScrollContainer}>
                        {products.map((product, index) => (
                            <TouchableOpacity
                                key={product.id} // Usar o ID do produto como chave
                                style={styles.productCard}
                                onPress={() => navigation.navigate('ProductItem', { productId: product.id })} // Passa o ID do produto
                            >
                                <Image
                                    source={{ uri: product.images[0] }}
                                    style={styles.productImage}
                                />
                                <Text style={styles.productName}>{product.title}</Text>
                                <Text style={styles.productPrice}>R$ {product.price}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Seção de Placas Mãe */}
                <View style={styles.productsContainer}>
                    <Text style={styles.sectionTitle}>Mais vistos no mundo em Placas Mãe</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('DetalhesProduto', { productId: 5 })}>
                            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
                            <Text style={styles.productName}>Placa Mãe A</Text>
                            <Text style={styles.productPrice}>R$ 299,90</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('DetalhesProduto', { productId: 6 })}>
                            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
                            <Text style={styles.productName}>Placa Mãe B</Text>
                            <Text style={styles.productPrice}>R$ 249,90</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('DetalhesProduto', { productId: 7 })}>
                            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
                            <Text style={styles.productName}>Placa Mãe C</Text>
                            <Text style={styles.productPrice}>R$ 329,90</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('DetalhesProduto', { productId: 8 })}>
                            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.productImage} />
                            <Text style={styles.productName}>Placa Mãe D</Text>
                            <Text style={styles.productPrice}>R$ 279,90</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    cepText: {
        color: '#999',
        marginLeft: 8,
    },
    bannerWrapper: {
        alignItems: 'center',
        marginVertical: 20,
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
        marginVertical: 20,
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
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 12,
        color: '#FE8330',
    },
});