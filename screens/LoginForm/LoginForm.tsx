import { View, Image, ToastAndroid } from "react-native";
import { Text, TextInput } from "@react-native-material/core";

import AppButton from "../../components/AppButton/AppButton.component";

import LoginFormStyles from "./LoginForm.styles";
import { useState, useEffect } from "react";
import authService from "../../services/auth.service";

const LoginForm = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const checkIfLoggedIn = async () => {
    const token = await authService.getAuthToken();
    if (token) {
      navigation.navigate("Product List");
    }
  };

  useEffect(() => {
    checkIfLoggedIn();

    const willRefetchOnFocus = navigation.addListener("focus", () => {
      checkIfLoggedIn();
    });

    return willRefetchOnFocus;
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    authService
      .login(username, password)
      .then(() => {
        setUsername("");
        setPassword("");
        ToastAndroid.show("You are now logged in.", ToastAndroid.SHORT);
        navigation.navigate("Product List");
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        ToastAndroid.show("Invalid Credentials.", ToastAndroid.SHORT);
        setUsername("");
        setPassword("");
      });
  };

  return (
    <View style={LoginFormStyles.container}>
      <Image
        source={{
          uri: "https://www.impressico.com/wp-content/uploads/2020/09/impressico-logo.png",
        }}
        style={LoginFormStyles.image}
      />
      <Text style={LoginFormStyles.heading}>Sign in to Asset Management</Text>
      <Text style={LoginFormStyles.subheading}>Enter your details below</Text>
      <TextInput
        style={LoginFormStyles.input}
        placeholder="Username"
        onChangeText={(newText) => setUsername(newText)}
        defaultValue={username}
        variant="standard"
        maxLength={15}
      />
      <TextInput
        style={LoginFormStyles.input}
        placeholder="Password"
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
        variant="standard"
        secureTextEntry
        maxLength={32}
      />
      <AppButton loading={loading} onPress={handleSubmit} title="Log in" />
    </View>
  );
};

export default LoginForm;
