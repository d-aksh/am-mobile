import { View, Image } from "react-native";
import { Text } from "@react-native-material/core";

import Input from "../Input/Input.component";
import AppButton from "../AppButton/AppButton.component";

import LoginFormStyles from "./LoginFors.styles";

const LoginForm = () => {
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
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <AppButton title="Log in" />
    </View>
  );
};

export default LoginForm;
