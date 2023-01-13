import { Button } from "@react-native-material/core";

import AppButtonStyles from "./AppButton.styles";

interface AppButtonProps {
  title: string;
  onPress: () => void;
}

const AppButton = ({ title, onPress }: AppButtonProps) => {
  return (
    <Button
      style={AppButtonStyles.container}
      title={title}
      color="primary"
      variant="contained"
      onPress={onPress}
    />
  );
};

export default AppButton;
