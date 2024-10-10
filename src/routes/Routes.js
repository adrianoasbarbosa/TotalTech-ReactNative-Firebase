import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import CustomDrawerContent from '../components/CustomDrawerContent';
import Ajuda from '../screens/appScreens/Ajuda/Ajuda';
import Anunciar from '../screens/appScreens/Anunciar/Anunciar';
import Compras from '../screens/appScreens/Compras/Compras';
import Conta from '../screens/appScreens/Conta/Conta';
import Inicio from '../screens/appScreens/Inicio/Inicio';
import Tutorial from '../screens/appScreens/Tutorial/Tutorial';
import Cadastro from '../screens/authentication/Cadastro/Cadastro';
import Login from '../screens/authentication/Login/Login';
import RecuperarSenha from '../screens/authentication/Login/RecuperarSenha/RecuperarSenha';
import OnBoarding from '../screens/authentication/OnBoarding/OnBoarding';
import Splash from '../screens/splashScreens/Splash/Splash';
import MinhaConta from '../screens/appScreens/Conta/Minha Conta/MinhaConta';
import Editar from '../screens/appScreens/Conta/Minha Conta/Alterar Conta/Editar';
import Favoritos from '../screens/appScreens/Conta/Favoritos/Favoritos';
import ProductItem from '../components/ProductItem/ProductItem';
import MeusAnúncio from '../screens/appScreens/Anunciar/Meus Anúncio/MeusAnúncio';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Splash'
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
            <Stack.Screen name="MinhaConta" component={MinhaConta} />
            <Stack.Screen name="Editar" component={Editar} />
            <Stack.Screen name="Favoritos" component={Favoritos} />
            <Stack.Screen name="ProductItem" component={ProductItem} />
            <Stack.Screen name="Compras" component={Compras} />
            <Stack.Screen name="MeusAnúncio" component={MeusAnúncio} />
            <Stack.Screen name="Inicio" component={Inicio} />
            <Stack.Screen name="DrawerApp" component={DrawerApp} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function DrawerApp() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#FE8330',
                drawerInactiveTintColor: '#000',
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Início"
                component={Inicio}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <AntDesign name="home" size={size} color={focused ? '#FE8330' : '#000'} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Anunciar"
                component={Anunciar}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <AntDesign name="notification" size={size} color={focused ? '#FE8330' : '#000'} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Minhas compras"
                component={Compras}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <AntDesign name="shoppingcart" size={size} color={focused ? '#FE8330' : '#000'} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Minha Conta"
                component={Conta}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <AntDesign name="user" size={size} color={focused ? '#FE8330' : '#000'} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Ajuda"
                component={Ajuda}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <AntDesign name="questioncircleo" size={size} color={focused ? '#FE8330' : '#000'} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Tutorial"
                component={Tutorial}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <AntDesign name="book" size={size} color={focused ? '#FE8330' : '#000'} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}