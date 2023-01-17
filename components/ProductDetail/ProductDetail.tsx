import { View, Image } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import React from "react";

interface ProductDetailProps {
  product?: {
    asset_name: string;
    company: string;
    image_url: string;
    model: string;
    serial_number: string;
    status: string;
  };
  navigation?: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  navigation,
}) => {
  {
    return product ? (
      <View>
        <Text>{product.asset_name}</Text>
        <Image source={{ uri: `${product.image_url}` }} />
        <TextInput />
        <Button
          title="Submit"
          onPress={() => {
            navigation.navigate("Product List");
          }}
        />
      </View>
    ) : (
      <Text>No Product</Text>
    );
  }
};

export default ProductDetail;
