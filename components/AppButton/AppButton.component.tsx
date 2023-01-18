import { Button } from "@react-native-material/core";

import AppButtonStyles from "./AppButton.styles";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  loading: boolean;
}

const AppButton = ({ title, onPress, loading }: AppButtonProps) => {
  return (
    <Button
      style={AppButtonStyles.container}
      title={title}
      color="primary"
      variant="contained"
      onPress={onPress}
      loading={loading}
      disabled={loading}
    />
  );
};

export default AppButton;
