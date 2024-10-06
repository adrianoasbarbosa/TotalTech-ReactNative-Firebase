import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importando a biblioteca de ícones

export default function Tutorial({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleOpenModal = (component) => {
        setSelectedComponent(component);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedComponent('');
    };

    const renderModalContent = () => {
        switch (selectedComponent) {
            case 'Placa Mãe':
                return (
                    <ScrollView style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Placa Mãe</Text>
                        <Text style={styles.modalText}>
                            A placa-mãe é uma parte bastante importante do computador. Mas o que é uma placa-mãe de fato? É uma peça central responsável por conectar e interligar todos os componentes (processador com memória RAM, disco rígido, placa gráfica). A placa une todas as partes do sistema numa só rede de fios, porque dispõe de caminhos que permitem a troca de informação entre processadores, memórias, placas e etc.
                            {'\n\n'}
                            Além de permitir o tráfego de informação, a placa-mãe serve também para alimentar alguns periféricos com a energia elétrica que recebe da fonte do gabinete. Todas essas funções tornam o nome “mãe” algo bem lógico: sem ela, o computador é apenas um amontoado de chips e placas independentes.
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                );
            case 'Processadores':
                return (
                    <ScrollView style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Processadores</Text>
                        <Text style={styles.modalText}>
                            O processador, ou CPU, é o cérebro do computador, responsável por executar as instruções dos programas. Ele opera através de ciclos de clock, determinando a velocidade com que pode processar dados. Processadores modernos possuem múltiplos núcleos, permitindo que realizem várias tarefas simultaneamente, o que melhora a eficiência e o desempenho do sistema.
                            {'\n\n'}
                            A escolha do processador deve considerar a sua finalidade: tarefas simples como navegação na web podem ser atendidas por CPUs mais básicas, enquanto jogos e softwares de edição exigem modelos mais robustos. O soquete da placa-mãe deve ser compatível com o modelo do processador escolhido.
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                );
            case 'Placa de Vídeo':
                return (
                    <ScrollView style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Placa de Vídeo</Text>
                        <Text style={styles.modalText}>
                            A placa de vídeo, ou GPU, é responsável pelo processamento gráfico e pela renderização de imagens. Ela é essencial para jogos, edição de vídeos e qualquer tarefa que exija desempenho visual. Uma boa placa de vídeo permite uma experiência mais fluida e detalhada, melhorando a qualidade gráfica.
                            {'\n\n'}
                            Placas de vídeo dedicadas têm seu próprio processador e memória, enquanto as integradas usam recursos do processador principal. Ao escolher uma GPU, é importante considerar a resolução desejada, a compatibilidade com a placa-mãe e a quantidade de memória dedicada.
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                );
            case 'Armazenamento':
                return (
                    <ScrollView style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Armazenamento</Text>
                        <Text style={styles.modalText}>
                            O armazenamento é crucial para qualquer computador, responsável por guardar o sistema operacional, programas e arquivos pessoais. Os principais tipos são os discos rígidos (HDDs) e as unidades de estado sólido (SSDs).
                            {'\n\n'}
                            Os HDDs são dispositivos tradicionais que utilizam pratos magnéticos para ler e gravar dados. Eles oferecem alta capacidade a um custo acessível, sendo ideais para usuários que precisam de muito espaço, como gamers e profissionais de mídia. No entanto, são mais lentos em comparação com os SSDs.
                            {'\n\n'}
                            Os SSDs, por outro lado, utilizam memória flash e proporcionam velocidades de leitura e gravação muito mais rápidas. Isso resulta em um desempenho geral melhorado, com inicialização rápida do sistema e carregamento instantâneo de aplicativos. Embora sejam mais caros por gigabyte, sua eficiência justifica o investimento.
                            {'\n\n'}
                            Os SSDs NVMe se conectam diretamente à placa-mãe via slot M.2, oferecendo velocidades excepcionais, ideais para aplicações que exigem alta performance, como edição de vídeo.
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                );
            case 'Memória':
                return (
                    <ScrollView style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Memória</Text>
                        <Text style={styles.modalText}>
                            A memória RAM (Random Access Memory) é um componente essencial do computador, responsável por armazenar temporariamente os dados e instruções que a CPU precisa acessar rapidamente. Quanto maior a capacidade de RAM, mais tarefas o computador pode realizar simultaneamente sem lentidão.
                            {'\n\n'}
                            A RAM é volátil, o que significa que os dados são perdidos quando o computador é desligado. Existem diferentes tipos de RAM, como DDR4 e DDR5, cada um com suas próprias velocidades e capacidades. A escolha da memória correta depende das necessidades do usuário, como jogos, edição de vídeo ou tarefas de escritório.
                            {'\n\n'}
                            Uma quantidade adequada de RAM é crucial para o desempenho geral do sistema, permitindo que os aplicativos sejam executados de maneira fluida e eficiente.
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                );
            case 'Gabinete':
                return (
                    <ScrollView style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Gabinete</Text>
                        <Text style={styles.modalText}>
                            O gabinete é a estrutura que abriga todos os componentes do computador, como a placa-mãe, o processador, a memória, os discos de armazenamento e a fonte de alimentação. Além de proteger os componentes, o gabinete ajuda a organizar o espaço interno e a melhorar o fluxo de ar.
                            {'\n\n'}
                            Existem diversos tipos de gabinetes, variando em tamanho, formato e estilo. Gabinetes ATX são os mais comuns, enquanto os mini-ITX são utilizados para montagens compactas. É importante escolher um gabinete que tenha espaço suficiente para todos os componentes e que permita uma boa ventilação.
                            {'\n\n'}
                            Um bom gabinete também pode contribuir para a estética do computador, com designs que incluem painéis de vidro e iluminação RGB.
                        </Text>
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="arrowleft" size={24} color="white" /> {/* Ícone de seta de voltar */}
                </TouchableOpacity>
                <Text style={styles.title}>Tutorial</Text>
            </View>

            {/* Subtítulo */}
            <Text style={styles.subtitle}>
                Aqui você terá acesso a informações sobre cada componente do seu computador.
            </Text>

            {/* Opções com divisores */}
            {['Placa Mãe', 'Processadores', 'Placa de Vídeo', 'Armazenamento', 'Memória', 'Gabinete'].map((item, index) => (
                <View key={index}>
                    <TouchableOpacity style={styles.option} onPress={() => handleOpenModal(item)}>
                        <Text style={styles.optionText}>{item}</Text>
                    </TouchableOpacity>
                    {/* Divisor */}
                    {index < 5 && <View style={styles.divider} />}
                </View>
            ))}

            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalInner}>
                        {renderModalContent()}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF8C00', // Tom laranja como no layout
        padding: 16,
        height: 56, // Altura do cabeçalho ajustada para ficar igual à da imagem
    },
    backButton: {
        paddingRight: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 14, // Tamanho de fonte ajustado para combinar com a imagem
        textAlign: 'center',
        marginVertical: 16,
    },
    option: {
        paddingVertical: 16, // Altura ajustada para maior espaçamento
        paddingHorizontal: 16,
    },
    optionText: {
        fontSize: 18,
        color: '#000', // Texto na cor preta para combinar com a imagem
    },
    divider: {
        height: 1,
        backgroundColor: '#ccc', // Divisores em cinza claro
        marginHorizontal: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo do modal com transparência
    },
    modalInner: {
        width: '90%',
        maxHeight: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    modalText: {
        fontSize: 16,
        lineHeight: 24,
    },
    closeButton: {
        backgroundColor: '#FF8C00', // Cor laranja para o botão
        padding: 10,
        borderRadius: 5,
        marginTop: 16,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
