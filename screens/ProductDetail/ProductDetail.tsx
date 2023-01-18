import { View, Image, ToastAndroid } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import { useState } from "react";

import ProductDetailStyles from "./ProductDetail.styles";
import { createAPIEndpoint, ENDPOINTS } from "../../services/api.service";
import authService from "../../services/auth.service";

interface ProductDetailProps {
  navigation?: any;
  route?: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ route, navigation }) => {
  {
    const { product } = route.params;
    const [text, setText] = useState("");

    const handleSubmit = async () => {
      const token = await authService.getAuthToken();
      if (token) {
        const response = await createAPIEndpoint(
          ENDPOINTS.ASSETREQUESTADD
        ).create(
          {
            asset_id: product.serial_number,
            remarks: text,
          },
          token
        );
        if (response) {
          navigation.goBack();
          ToastAndroid.show("Request submit successfully.", ToastAndroid.SHORT);
        }
      }
    };

    return product ? (
      <View style={ProductDetailStyles.container}>
        <Text style={ProductDetailStyles.headline}>{product.asset_name}</Text>
        <Image
          source={{ uri: `${product.image_url}` }}
          style={ProductDetailStyles.image}
        />
        <TextInput
          style={ProductDetailStyles.textbox}
          variant="outlined"
          defaultValue={text}
          onChangeText={(newText) => setText(newText)}
        />
        <Button
          style={ProductDetailStyles.button}
          title="Submit"
          onPress={handleSubmit}
        />
      </View>
    ) : (
      <Text>No Product</Text>
    );
  }
};

export default ProductDetail;
