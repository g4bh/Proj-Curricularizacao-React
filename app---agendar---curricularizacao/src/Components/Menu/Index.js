import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome6';

// Páginas
import Home from '../../Pages/HomeMenu/Index';
import AgendarVisita from '../../Pages/AgendarVisita/Index';
import AgendasMarcadas from '../../Pages/AgendasMarcadas/Index';
import Perfil from '../../Pages/Perfil/Index';
import DescricaoAgenda from '../../Pages/DescricaoAgenda/Index';
import Login from '../../Pages/Login/Index';
import Cadastro from '../../Pages/Cadastro/Index';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabsInfo = {
  Home: { icon: 'house', label: 'Home' },
  AgendarVisita: { icon: 'calendar-plus', label: 'Agendar\nVisita' },
  AgendasMarcadas: { icon: 'calendar-check', label: 'Visita Agendada' },
  Perfil: { icon: 'user', label: 'Perfil' },
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Icon name={tabsInfo[route.name].icon} color={color} size={size} />
        ),
        tabBarLabel: tabsInfo[route.name].label,
        tabBarActiveTintColor: '#F9FCFF',
        tabBarInactiveTintColor: '#4A87CC',
        tabBarActiveBackgroundColor: '#4A87CC',
        tabBarInactiveBackgroundColor: '#F9FCFF',
        headerShown: false,
        tabBarIconStyle: { marginTop: 5 },
        tabBarLabelStyle: {
          fontSize: 12,
          textAlign: 'center',
          marginBottom: 8,
          lineHeight: 14,
        },
        tabBarItemStyle: { borderRadius: 30 },
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          backgroundColor: '#ffffff',
          borderRadius: 50,
          height: 70,
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          overflow: 'hidden',
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AgendarVisita" component={AgendarVisita} />
      <Tab.Screen name="AgendasMarcadas" component={AgendasMarcadas} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function Menu() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">        
        <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="DescricaoAgenda" component={DescricaoAgenda} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
