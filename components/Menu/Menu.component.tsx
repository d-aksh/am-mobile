import { View } from "react-native";
import MenuStyles from "./Menu.styles";

interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => (
  <View style={MenuStyles.container}>{children}</View>
);

export default Menu;
