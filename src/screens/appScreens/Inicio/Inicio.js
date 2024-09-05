import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ProductItem({ imageSrc, name, price, location }) {
    return (
        <View style={styles.productItem}>
            <Image source={{ uri: imageSrc }} style={styles.productImage} />
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>{price}</Text>
            <Text style={styles.productLocation}>{location}</Text>
        </View>
    );
}

export default function Inicio() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.menuText}>≡</Text>
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <Image style={styles.searchIcon} />
                    <Text style={styles.searchInput}>Buscar</Text>
                </View>
                <TouchableOpacity style={styles.cartButton}>
                    <Image style={styles.cartIcon} />
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
                    <ProductItem
                        imageSrc="https://example.com/gabinete1.jpg"
                        name="Gabinete Gamer Montech x3 MESH, Mid Tower, Black, ATX, Com 6 Fans Rainbow, Vidro Temperado, X3 MESH (B)"
                        price="R$ 219,90"
                        location="Itu - São Paulo"
                    />
                    <ProductItem
                        imageSrc="https://example.com/gabinete1.jpg"
                        name="Gabinete Gamer Montech x3 MESH, Mid Tower, Black, ATX, Com 6 Fans Rainbow, Vidro Temperado, X3 MESH (B)"
                        price="R$ 219,90"
                        location="Itu - São Paulo"
                    />
                    <ProductItem
                        imageSrc="https://example.com/gabinete1.jpg"
                        name="Gabinete Gamer Montech x3 MESH, Mid Tower, Black, ATX, Com 6 Fans Rainbow, Vidro Temperado, X3 MESH (B)"
                        price="R$ 219,90"
                        location="Itu - São Paulo"
                    />
                    <ProductItem
                        imageSrc="https://example.com/gabinete2.jpg"
                        name="Gabinete Gamer Montech x3 MESH, Mid Tower, Vidro Temperado, Black, ATX, Com 3 Fans Rainbow"
                        price="R$ 169,90"
                        location="Salto - São Paulo"
                    />
                </View>
            </ScrollView>

            <Text style={styles.sectionTitle}>Processadores</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FE8330',
    },
    menuButton: {
        marginRight: 16,
    },
    menuText: {
        fontSize: 24,
        color: '#fff',
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
    cartIcon: {
        width: 24,
        height: 24,
    },
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
    productItem: {
        width: 200, // Ajuste a largura conforme necessário
        marginRight: 16,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        padding: 10,
    },
    productImage: {
        width: '100%',
        height: 120,
        marginBottom: 8,
        borderRadius: 8,
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        color: '#00AA00',
        marginBottom: 4,
    },
    productLocation: {
        fontSize: 12,
        color: '#777',
    },
});
