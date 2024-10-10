import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqData = [
        { question: "Como posso criar uma conta?", answer: "Para criar uma conta, clique em 'Cadastrar' na tela inicial e preencha os campos solicitados com suas informações." },
        { question: "Esqueci minha senha. Como posso recuperá-la?", answer: "Clique em 'Esqueci minha senha' na página de login e siga as instruções para redefinir sua senha." },
        { question: "Como posso entrar em contato com o suporte ao cliente?", answer: "Você pode nos contatar através do chat ao vivo no aplicativo, pelo e-mail ou pelo telefone disponível na seção 'Contato'." },
        { question: "Como funcionam as avaliações de produtos?", answer: "Você pode deixar uma avaliação de um produto após a compra. Acesse o produto na sua conta e clique em 'Avaliar'." },
        { question: "Posso modificar ou cancelar meu pedido?", answer: "Você pode modificar ou cancelar seu pedido dentro de uma hora após a confirmação. Entre em contato com o suporte ao cliente para assistência." },
        { question: "Como posso atualizar minhas informações pessoais?", answer: "Para atualizar suas informações, acesse a seção 'Meu Perfil' no aplicativo e faça as alterações desejadas." },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perguntas Frequentes:</Text>
            <FlatList
                data={faqData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.questionContainer} onPress={() => toggleExpand(index)}>
                            <Text style={styles.question}>{item.question}</Text>
                            <AntDesign name={expandedIndex === index ? "up" : "down"} size={16} color="#000" />
                        </TouchableOpacity>
                        {expandedIndex === index && (
                            <Text style={styles.answer}>{item.answer}</Text>
                        )}
                    </View>
                )}
            />
        </View>
    );
};

export default function Ajuda({ navigation }) {
    const [duvida, setDuvida] = useState('');

    const handleSubmit = () => {
        alert('Dúvida enviada: ' + duvida);
        setDuvida('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Ajuda</Text>
            </View>

            <View style={styles.content}>
                <FAQ />
                <View style={styles.card}>
                    <Text style={styles.label}>Escreva sua dúvida:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite aqui..."
                        value={duvida}
                        onChangeText={setDuvida}
                        multiline
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FE8330',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '90%',
        maxWidth: 400,
        marginTop: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#FE8330',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    itemContainer: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
        width: '90%',
        maxWidth: 400,
        alignSelf: 'center',
    },
    questionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    question: {
        fontSize: 18,
        color: '#000',
        flex: 1,
        fontWeight: 'bold',
    },
    answer: {
        fontSize: 16,
        marginTop: 5,
        color: '#333',
    },
});
