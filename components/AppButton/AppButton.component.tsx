import { Button } from "@react-native-material/core";

import AppButtonStyles from "./AppButton.styles";

interface AppButtonProps {
  title: string;
}

const AppButton = ({ title }: AppButtonProps) => {
  return (
    <Button
      style={AppButtonStyles.container}
      title={title}
      color="primary"
      variant="contained"
    />
  );
};

export default AppButton;
