// ProductItem.js
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

function ProductItem({ imageSrc, name, price, location, onPress }) {
    return (
        <TouchableOpacity style={styles.productItem} onPress={onPress}>
            <Image source={{ uri: imageSrc }} style={styles.productImage} />
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>{price}</Text>
            <Text style={styles.productLocation}>{location}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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

export default ProductItem;
