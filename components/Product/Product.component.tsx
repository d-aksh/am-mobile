import { View, Image } from "react-native";
import { Text, ListItem } from "@react-native-material/core";

import ProductStyles from "./Product.styles";

interface ProductProps {
  product: {
    asset_name: string;
    company: string;
    image_url: string;
    model: string;
    serial_number: string;
    status: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const im_url = product.image_url;
  return (
    <View style={ProductStyles.container}>
      <Text style={ProductStyles.headline}>{product.asset_name}</Text>
      <Text style={ProductStyles.text}>{product.serial_number}</Text>
      <Image
        source={{
          uri: im_url,
        }}
        style={ProductStyles.image}
      />
    </View>
  );
};

export default Product;
