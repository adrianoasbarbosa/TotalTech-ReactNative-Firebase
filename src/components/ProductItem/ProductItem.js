// ProductItem.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function ProductItem({ imageSrc, name, price, location, description, sellerName }) {
    return (
        <View style={styles.productItem}>
            <Image source={{ uri: imageSrc }} style={styles.productImage} />
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>{price}</Text>
            <Text style={styles.productLocation}>{location}</Text>
            <Text style={styles.productDescription}>{description}</Text>
            <Text style={styles.userName}>Vendido por: {sellerName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    productItem: {
        width: 200,
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
        marginBottom: 4,
    },
    productDescription: {
        fontSize: 12,
        color: '#555',
        marginBottom: 4,
    },
    userName: {
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default ProductItem;
