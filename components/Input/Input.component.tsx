import { useState } from "react";
import { TextInput } from "@react-native-material/core";

import InputStyles from "./input.styles";

interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder }: InputProps) => {
  const [text, setText] = useState("");
  return (
    <TextInput
      style={InputStyles.container}
      label={placeholder}
      onChangeText={(newText) => setText(newText)}
      defaultValue={text}
    />
  );
};

export default Input;
