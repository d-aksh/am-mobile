import { useState } from "react";
import { View, Image } from "react-native";
import { Text, Button } from "@react-native-material/core";

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
  navigation?: any;
}

const Product = ({ product, navigation }: ProductProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={ProductStyles.container}>
      <Text style={ProductStyles.headline}>{product.asset_name}</Text>
      <Text style={ProductStyles.text}>{product.model}</Text>
      <Image
        source={{
          uri: `${product.image_url}`,
        }}
        style={ProductStyles.image}
      />
      <Button
        style={ProductStyles.button}
        title="Request"
        onPress={() => {
          navigation.navigate("Product Detail", { product });
        }}
      />
    </View>
  );
};

export default Product;
