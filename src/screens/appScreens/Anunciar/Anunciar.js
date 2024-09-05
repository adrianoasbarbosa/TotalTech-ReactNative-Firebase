import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { FlatList, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { auth, db, storage } from '../../../config/firebaseConfig';
import Fonts from '../../../utils/Fonts';

export default function Anunciar({ navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [cep, setCep] = useState('');
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

    const handleImagePicker = async () => {
        if (photos.length >= 6) {
            Toast.show({
                type: 'error',
                text1: 'Limite de fotos',
                text2: 'Você já adicionou o máximo de 6 fotos.',
                visibilityTime: 3000,
                position: 'top'
            });
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setPhotos([...photos, result.uri]);
        }
    };

    const uploadImages = async () => {
        const uploadPromises = photos.map(async (photoUri, index) => {
            const response = await fetch(photoUri);
            const blob = await response.blob();
            const imageRef = ref(storage, `images/${Date.now()}_${index}.jpg`);
            await uploadBytes(imageRef, blob);
            const downloadURL = await getDownloadURL(imageRef);
            return downloadURL;
        });

        return Promise.all(uploadPromises);
    };

    const handleSubmit = async () => {
        if (!title || !description || !category || !cep) {
            Toast.show({
                type: 'error',
                text1: 'Erro',
                text2: 'Por favor, preencha todos os campos.',
                visibilityTime: 3000,
                position: 'top'
            });
            return;
        }

        try {
            const user = auth.currentUser;
            const userId = user.uid;
            const imageUrls = await uploadImages();

            await setDoc(doc(db, "Anuncios", userId), {
                title: title,
                description: description,
                category: category,
                cep: cep,
                userId: userId,
                images: imageUrls,
            });

            Toast.show({
                type: 'success',
                text1: 'Sucesso',
                text2: 'Anúncio cadastrado com sucesso!',
                visibilityTime: 3000,
                position: 'top'
            });

            navigation.navigate('Inicial');
        } catch (e) {
            Toast.show({
                type: 'error',
                text1: 'Erro ao cadastrar',
                text2: e.message,
                visibilityTime: 3000,
                position: 'top'
            });
        }
    };

    const handleClear = () => {
        setTitle('');
        setDescription('');
        setCategory('');
        setCep('');
        setPhotos([]);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.backButton}>
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
                                {[...Array(6)].map((_, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.image, index < photos.length ? styles.imageWithPhoto : {}]}
                                        onPress={index >= photos.length ? handleImagePicker : undefined}
                                    >
                                        {index < photos.length ? (
                                            <Image
                                                source={{ uri: photos[index] }}
                                                style={styles.imageContent}
                                            />
                                        ) : (
                                            <Text style={styles.imageText}>+</Text>
                                        )}
                                    </TouchableOpacity>
                                ))}
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
                                    editable={false} // Impede a edição manual do campo
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
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingBottom: 20, // Adiciona espaço na parte inferior para evitar sobreposição
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
    backButtonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: Fonts['poppins-bold'], // Adicionar fonte
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontFamily: Fonts['poppins-bold'], // Adicionar fonte
        fontWeight: 'bold',
    },
    clearButton: {
        padding: 10,
    },
    clearButtonText: {
        fontSize: 16,
        color: 'white',
        fontFamily: Fonts['poppins-regular'], // Adicionar fonte
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
    imageWithPhoto: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
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
        fontFamily: Fonts['poppins-regular'], // Adicionar fonte
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        fontFamily: Fonts['poppins-bold'], // Adicionar fonte
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontFamily: Fonts['poppins-regular'], // Adicionar fonte
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
        fontFamily: Fonts['poppins-bold'], // Adicionar fonte
    },
    terms: {
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: Fonts['poppins-regular'], // Adicionar fonte
    },
    termsLink: {
        color: '#FE8330',
        fontFamily: Fonts['poppins-regular'], // Adicionar fonte
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
        fontFamily: Fonts['poppins-regular'], // Adicionar fonte
    },
});
