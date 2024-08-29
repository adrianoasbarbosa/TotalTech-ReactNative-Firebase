import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Anunciar() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [cep, setCep] = useState('');
    const [hidePhone, setHidePhone] = useState(false);

    const handleTitleChange = (text) => setTitle(text);
    const handleDescriptionChange = (text) => setDescription(text);
    const handleCategoryChange = (text) => setCategory(text);
    const handleCepChange = (text) => setCep(text);
    const handleHidePhoneChange = () => setHidePhone(!hidePhone);

    const handleSubmit = () => {
        // Aqui você pode enviar os dados para o seu backend
        console.log('Título:', title);
        console.log('Descrição:', description);
        console.log('Categoria:', category);
        console.log('CEP:', cep);
        console.log('Ocultar telefone:', hidePhone);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Inserir anúncio</Text>
                <TouchableOpacity style={styles.clearButton}>
                    <Text style={styles.clearButtonText}>LIMPAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <View style={styles.image}>
                        <Text style={styles.imageText}>+</Text>
                    </View>
                    <Text style={styles.imageInfo}>Fotos do Produto</Text>
                    <Text style={styles.imageInfo}>0/6</Text>
                </View>
                <Text style={styles.label}>Título do anúncio*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Gabinete Montech..."
                    value={title}
                    onChangeText={handleTitleChange}
                />
                <Text style={styles.label}>Descrição*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Gabinete Montech novo, na caixa, sem ventoinhas, PRETO."
                    multiline
                    numberOfLines={4}
                    value={description}
                    onChangeText={handleDescriptionChange}
                />
                <Text style={styles.label}>Categoria*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Selecione uma categoria"
                    value={category}
                    onChangeText={handleCategoryChange}
                />
                <Text style={styles.label}>CEP*</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={cep}
                    onChangeText={handleCepChange}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Enviar anúncio</Text>
                </TouchableOpacity>
                <Text style={styles.terms}>Ao publicar você concorda e aceita nossos <Text style={styles.termsLink}>Termos de Uso</Text> e <Text style={styles.termsLink}>Privacidade</Text></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#F7931E',
    },
    backButton: {
        padding: 10,
    },
    backButtonText: {
        fontSize: 20,
        color: 'white',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    clearButton: {
        padding: 10,
    },
    clearButtonText: {
        fontSize: 16,
        color: 'white',
    },
    content: {
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText: {
        fontSize: 30,
        color: '#ccc',
    },
    imageInfo: {
        fontSize: 12,
        color: '#666',
        marginTop: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#F7931E',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    terms: {
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
    },
    termsLink: {
        color: '#F7931E',
    },
    checkbox: {
        marginBottom: 10,
    },
});