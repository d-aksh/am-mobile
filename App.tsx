import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginForm from "./screens/LoginForm/LoginForm";
import ProductList from "./screens/ProductList/ProductList.component";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={LoginForm} />
        <stack.Screen name="Product List" component={ProductList} />
      </stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
