import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import AppStyles from "./App.styles";
import LoginForm from "./components/LoginForm/LoginForm";

export default function App() {
  return (
    <View style={AppStyles.container}>
      <LoginForm />
      <StatusBar style="auto" />
    </View>
  );
}
