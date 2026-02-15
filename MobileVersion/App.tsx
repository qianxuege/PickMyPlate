import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './src/context/AppContext';
import { RootStackParamList } from './src/navigation/types';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { PreferencesScreen } from './src/screens/PreferencesScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ScanScreen } from './src/screens/ScanScreen';
import { ResultsScreen } from './src/screens/ResultsScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { AdjustPreferencesScreen } from './src/screens/AdjustPreferencesScreen';
import { DishDetailScreen } from './src/screens/DishDetailScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { FavoritesScreen } from './src/screens/FavoritesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: '#fff' },
            }}
          >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Preferences" component={PreferencesScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Scan" component={ScanScreen} />
            <Stack.Screen name="Results" component={ResultsScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="AdjustPreferences" component={AdjustPreferencesScreen} />
            <Stack.Screen name="DishDetail" component={DishDetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="dark" />
      </AppProvider>
    </SafeAreaProvider>
  );
}
