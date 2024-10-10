import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Share, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

export default function ProductItem({ route, navigation }) {
    const { productId } = route.params; // Pegando o id do produto
    const [product, setProduct] = useState(null); // Estado para armazenar os dados do produto
    const [sellerName, setSellerName] = useState(''); // Estado para armazenar o nome do anunciante
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productDoc = await getDoc(doc(db, 'Anuncios', productId));
                if (productDoc.exists()) {
                    const productData = productDoc.data();
                    setProduct({
                        ...productData,
                        publishedDate: productData.publishedDate ? productData.publishedDate.toDate().toLocaleDateString() : "Data não disponível", // Verifica se existe
                        sellerSince: productData.sellerSince ? productData.sellerSince.toDate().toLocaleDateString() : "Data não disponível" // Verifica se existe
                    });

                    // Busca o nome do anunciante com base no userId
                    if (productData.userId) {
                        const userDoc = await getDoc(doc(db, 'Usuarios', productData.userId));
                        if (userDoc.exists()) {
                            setSellerName(userDoc.data().name); // Define o nome do anunciante
                        } else {
                            console.log("Anunciante não encontrado");
                        }
                    }
                } else {
                    console.log("Produto não encontrado");
                }
            } catch (error) {
                console.error("Erro ao buscar detalhes do produto: ", error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    const handleShare = async () => {
        if (product) {
            try {
                await Share.share({
                    message: `Confira este anúncio: ${product.title} por R$ ${product.price}. Mais detalhes: ${product.description}.`,
                });
            } catch (error) {
                console.error('Erro ao compartilhar:', error.message);
            }
        }
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    if (!product) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Carregando produto...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Anúncio</Text>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.heartIcon} onPress={toggleFavorite}>
                            <AntDesign name={isFavorited ? "heart" : "hearto"} style={[styles.icon, isFavorited && styles.favorited]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareIcon} onPress={handleShare}>
                            <AntDesign name="sharealt" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Imagem do produto */}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.images[0] }} style={styles.image} />
                </View>
                <Text style={styles.imageCounter}>1/6</Text>

                {/* Detalhes do produto */}
                <Text style={styles.productName}>{product.title}</Text>
                <Text style={styles.price}>R$ {product.price}</Text>
                <Text style={styles.publishedDate}>Publicado em {product.publishedDate}</Text>

                {/* Descrição */}
                <Text style={styles.sectionTitle}>Descrição</Text>
                <Text style={styles.descriptionText}>{product.description}</Text>
                <TouchableOpacity style={styles.readMoreButton}>
                    <Text style={styles.readMoreButtonText}>Ver descrição completa</Text>
                </TouchableOpacity>

                {/* Localização */}
                <Text style={styles.sectionTitle}>Localização</Text>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationLabel}>CEP: {product.zipCode}</Text>
                    <Text style={styles.locationLabel}>Cidade: {product.city}</Text>
                    <Text style={styles.locationLabel}>Bairro: {product.neighborhood}</Text>
                </View>

                {/* Anunciante */}
                <Text style={styles.sectionTitle}>Anunciante</Text>
                <View style={styles.advertiserContainer}>
                    <Text style={styles.locationLabel}>{sellerName || "Anunciante não encontrado"}</Text>
                    <Text style={styles.locationLabel}>Na TotalTech desde {product.sellerSince}</Text>
                </View>

                {/* Botão de Chat */}
                <TouchableOpacity style={styles.chatButton}>
                    <Text style={styles.chatButtonText}>Chat</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    loadingText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: '50%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FF6F00',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    icon: {
        fontSize: 28,
        color: '#333',
    },
    favorited: {
        color: '#FF0000',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heartIcon: {
        width: 28,
        height: 28,
    },
    shareIcon: {
        width: 28,
        height: 28,
    },
    imageContainer: {
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    imageCounter: {
        fontSize: 14,
        color: '#666',
        padding: 8,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 16,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF6F00',
        paddingHorizontal: 16,
    },
    publishedDate: {
        fontSize: 14,
        color: '#666',
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 16,
        marginTop: 16,
    },
    descriptionText: {
        fontSize: 14,
        color: '#666',
        paddingHorizontal: 16,
    },
    readMoreButton: {
        padding: 16,
    },
    readMoreButtonText: {
        fontSize: 14,
        color: '#FF6F00',
    },
    locationContainer: {
        paddingHorizontal: 16,
    },
    locationLabel: {
        fontSize: 14,
        color: '#666',
    },
    advertiserContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 16,
    },
    chatButton: {
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#FF6F00',
        marginHorizontal: 16,
    },
    chatButtonText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
});
