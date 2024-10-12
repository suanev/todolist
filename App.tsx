import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import Loading from './src/components/Loading';
import Home from './src/screens/Home';
import theme from './src/theme';


export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});

  return (
    fontsLoaded ? (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider style={{flex: 1, backgroundColor: theme.COLORS.GRAY_600}}>
          <StatusBar barStyle="light-content" translucent={true} />
          <Home />
        </SafeAreaProvider>
      </ThemeProvider>
    ) : (
      <Loading />
    )
  );
}
