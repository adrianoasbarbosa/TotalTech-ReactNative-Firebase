import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import fonts from './src/config/fonts';
import Routes from './src/routes/Routes';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor="#FE8330" barStyle="light-content" />
      <NavigationContainer>
        <Routes />
        <Toast />
      </NavigationContainer>
    </>
  );
}
