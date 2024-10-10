import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { FlatList, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { auth, db } from '../../../config/firebaseConfig';
import Fonts from '../../../utils/Fonts';

export default function Anunciar({ navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [cep, setCep] = useState('');
    const [price, setPrice] = useState('');
    const [photos, setPhotos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const categories = ['Celulares', 'Gabinetes', 'Processadores', 'Monitores'];

    const handleTitleChange = (text) => setTitle(text);
    const handleDescriptionChange = (text) => setDescription(text);
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        setModalVisible(false);
    };
    const handleCepChange = (text) => setCep(text);
    const handlePriceChange = (text) => setPrice(text);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            if (photos.length < 6) {
                setPhotos([...photos, uri]);
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Limite de Fotos',
                    text2: 'Você pode adicionar no máximo 6 fotos.',
                    visibilityTime: 3000,
                    position: 'top'
                });
            }
        }
    };

    const handleSubmit = async () => {
        // Verificar se o usuário está logado
        const user = auth.currentUser;
        if (!user) {
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: 'Você precisa estar logado para enviar um anúncio.',
                visibilityTime: 3000,
                position: 'top',
            });
            return;
        }

        if (!title || !description || !category || !cep || !price) {
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: 'Por favor, preencha todos os campos.',
                visibilityTime: 3000,
                position: 'top',
            });
            return;
        }

        try {
            const userId = user.uid;

            // Adicionar um novo documento na coleção "Anuncios"
            const docRef = await addDoc(collection(db, "Anuncios"), {
                title,
                description,
                category,
                cep,
                price,
                userId,
                images: photos,
                createdAt: new Date(),
            });

            // Capturar o ID do documento
            const productId = docRef.id;

            Toast.show({
                type: 'success',
                text1: 'Sucesso',
                text2: 'Anúncio cadastrado com sucesso!',
                visibilityTime: 3000,
                position: 'top',
            });

            // Limpar todos os campos do formulário
            setTitle('');
            setDescription('');
            setCategory('');
            setCep('');
            setPrice('');
            setPhotos([]);

            // Navegar para a tela inicial, passando o ID do produto
            navigation.navigate('Inicio', { productId });
        } catch (e) {
            Toast.show({
                type: 'error',
                text1: 'Erro ao cadastrar',
                text2: e.message,
                visibilityTime: 3000,
                position: 'top',
            });
        }
    };

    const handleClear = () => {
        setTitle('');
        setDescription('');
        setCategory('');
        setCep('');
        setPrice('');
        setPhotos([]);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Inserir anúncio</Text>
                        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
                            <Text style={styles.clearButtonText}>LIMPAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.imageContainer}>
                            <View style={styles.imageGrid}>
                                {photos.map((photo, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.image}
                                        onPress={pickImage}
                                    >
                                        <Image
                                            source={{ uri: photo }}
                                            style={styles.imageContent}
                                        />
                                    </TouchableOpacity>
                                ))}
                                {photos.length < 6 && (
                                    <TouchableOpacity
                                        style={[styles.image, styles.addImage]}
                                        onPress={pickImage}
                                    >
                                        <Text style={styles.imageText}>+</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                            <Text style={styles.imageInfo}>{photos.length}/6</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Título do anúncio*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: Gabinete Montech..."
                                value={title}
                                onChangeText={handleTitleChange}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Descrição*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: Gabinete Montech novo, na caixa, sem ventoinhas, PRETO."
                                multiline
                                numberOfLines={4}
                                value={description}
                                onChangeText={handleDescriptionChange}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Categoria*</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Selecione uma categoria"
                                    value={category}
                                    editable={false}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>CEP*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="CEP"
                                keyboardType="numeric"
                                value={cep}
                                onChangeText={handleCepChange}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Preço*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: 150,00"
                                keyboardType="numeric"
                                value={price}
                                onChangeText={handlePriceChange}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Enviar anúncio</Text>
                        </TouchableOpacity>
                        <Text style={styles.terms}>Ao publicar você concorda e aceita nossos <Text style={styles.termsLink}>Termos de Uso</Text> e <Text style={styles.termsLink}>Privacidade</Text></Text>
                    </View>

                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <FlatList
                                    data={categories}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => handleCategoryChange(item)}>
                                            <Text style={styles.categoryItem}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#FE8330',
    },
    backButton: {
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontFamily: Fonts['poppins-bold'],
        fontWeight: 'bold',
    },
    clearButton: {
        padding: 10,
    },
    clearButtonText: {
        fontSize: 16,
        color: 'white',
        fontFamily: Fonts['poppins-regular'],
    },
    content: {
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    addImage: {
        backgroundColor: '#f0f0f0',
        borderColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContent: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    imageText: {
        fontSize: 30,
        color: '#ccc',
    },
    imageInfo: {
        fontSize: 12,
        color: '#666',
        marginTop: 5,
        fontFamily: Fonts['poppins-regular'],
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        fontFamily: Fonts['poppins-bold'],
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontFamily: Fonts['poppins-regular'],
    },
    button: {
        backgroundColor: '#FE8330',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: Fonts['poppins-bold'],
    },
    terms: {
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: Fonts['poppins-regular'],
    },
    termsLink: {
        color: '#FE8330',
        fontFamily: Fonts['poppins-regular'],
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        margin: 20,
        padding: 20,
        borderRadius: 10,
    },
    categoryItem: {
        padding: 10,
        fontSize: 16,
        fontFamily: Fonts['poppins-regular'],
    },
});
