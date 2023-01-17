import { View, Image } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import React from "react";

import ProductDetailStyles from "./ProductDetail.styles";

interface ProductDetailProps {
  navigation?: any;
  route?: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route, navigation }) => {
  {
    const { product } = route.params;
    return product ? (
      <View style={ProductDetailStyles.container}>
        <Text style={ProductDetailStyles.headline}>{product.asset_name}</Text>
        <Image
          source={{ uri: `${product.image_url}` }}
          style={ProductDetailStyles.image}
        />
        <TextInput style={ProductDetailStyles.textbox} variant="outlined" />
        <Button
          style={ProductDetailStyles.button}
          title="Submit"
          onPress={() => {
            navigation.push("Product List");
          }}
        />
      </View>
    ) : (
      <Text>No Product</Text>
    );
  }
};

export default ProductDetail;
