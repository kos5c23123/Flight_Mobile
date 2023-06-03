import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { Ionicons, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/Home";
import ProfileScreen from "./src/Profile";
import TicketScreen from "./src/Ticket";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000"}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              switch (route.name) {
                case "Home":
                  return (
                    <Ionicons
                      name={focused ? "home" : "home-outline"}
                      size={size}
                      color={focused ? "#FFFF00" : color}
                    />
                  );
                case "Profile":
                  return (
                    <Ionicons
                      name={focused ? "person" : "person-outline"}
                      size={size}
                      color={focused ? "#FFFF00" : color}
                    />
                  );
                case "Ticket":
                  return (
                    <MaterialCommunityIcons
                      name={focused ? "ticket" : "ticket-outline"}
                      size={size}
                      color={focused ? "#FFFF00" : color}
                    />
                  );
              }
            },
            headerShown: false,
            tabBarLabel: () => null,
            tabBarStyle: {
              backgroundColor: "#000",
              borderTopWidth: 0,
            },
          })}
        >
          <Tab.Screen name="Ticket" component={TicketScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
