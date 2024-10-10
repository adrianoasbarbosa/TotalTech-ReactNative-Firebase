import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Share, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Para navegação

export default function ProductItem({ route }) {
    const [product, setProduct] = useState(null); // Estado para armazenar os dados do produto
    const [isFavorited, setIsFavorited] = useState(false); // Estado para controlar se o produto foi favoritado
    const { productId } = route.params;  // Obtém o ID do produto da navegação
    const navigation = useNavigation(); // Instância de navegação

    useEffect(() => {
        // Simulação de dados estáticos, como se tivesse vindo do Firestore
        const productData = {
            id: productId,
            name: "Gabinete Gamer Montech x3 MESH",
            price: "219,90",
            publishedDate: "20/03 às 15:30",
            description: "Gabinete 100% novo, sem uso, vem com 6 Fans Rainbow...",
            zipCode: "09550630",
            city: "Itu",
            neighborhood: "Jardim Santa Rosa",
            sellerName: "Bruno B.",
            sellerSince: "abril de 2022",
            imageUrl: "https://via.placeholder.com/200", // Exemplo de URL para imagem
        };

        setProduct(productData); // Define os dados no estado
    }, [productId]);

    const handleShare = async () => {
        try {
            await Share.share({
                message: `Confira este anúncio: ${product.name} por R$ ${product.price}. Mais detalhes: ${product.description}. Localização: ${product.city}, ${product.neighborhood}.`,
            });
        } catch (error) {
            console.error('Erro ao compartilhar:', error.message);
        }
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited); // Alterna entre favoritar e desfavoritar
    };

    if (!product) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                {/* Cabeçalho */}
                <View style={styles.header}>
                    {/* Botão de Voltar */}
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Anúncio</Text>
                    <View style={styles.headerIcons}>
                        {/* Ícone de Favorito */}
                        <TouchableOpacity style={styles.heartIcon} onPress={toggleFavorite}>
                            <AntDesign name={isFavorited ? "heart" : "hearto"} style={[styles.icon, isFavorited && styles.favorited]} />
                        </TouchableOpacity>
                        {/* Ícone de Compartilhar */}
                        <TouchableOpacity style={styles.shareIcon} onPress={handleShare}>
                            <AntDesign name="sharealt" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Imagem do produto */}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.imageUrl }} style={styles.image} />
                </View>
                <Text style={styles.imageCounter}>1/6</Text>

                {/* Detalhes do produto */}
                <Text style={styles.productName}>{product.name}</Text>
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
                    <Text style={styles.locationLabel}>{product.sellerName}</Text>
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
        backgroundColor: '#FF6F00', // Laranja vibrante
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
        fontSize: 28, // Aumentei o tamanho dos ícones
        color: '#333',
    },
    favorited: {
        color: '#FF0000', // Coração vermelho quando favoritado
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
        padding: 16,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF6F00', // Laranja vibrante
        padding: 16,
    },
    publishedDate: {
        fontSize: 14,
        color: '#666',
        padding: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        padding: 16,
    },
    descriptionText: {
        fontSize: 14,
        color: '#666',
        padding: 16,
    },
    readMoreButton: {
        padding: 16,
    },
    readMoreButtonText: {
        fontSize: 14,
        color: '#FF6F00', // Laranja vibrante
    },
    locationContainer: {
        padding: 16,
    },
    locationLabel: {
        fontSize: 14,
        color: '#666',
    },
    advertiserContainer: {
        backgroundColor: '#f0f0f0', // Quadrado cinza em volta do anunciante
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 16,
    },
    chatButton: {
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#FF6F00', // Laranja vibrante
    },
    chatButtonText: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
    },
});