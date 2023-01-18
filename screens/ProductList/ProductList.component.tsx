import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Button } from "@react-native-material/core";

import * as SecureStore from "expo-secure-store";

import Product from "../../components/Product/Product.component";
import { createAPIEndpoint, ENDPOINTS } from "../../services/api.service";

import ProductListStyles from "./ProductList.styles";

const ProductList = ({ navigation }: any) => {
  interface Product {
    asset_name: string;
    company: string;
    image_url: string;
    model: string;
    serial_number: string;
    status: string;
  }

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const token = await SecureStore.getItemAsync("access");
    if (token) {
      const fetchedProducts = await createAPIEndpoint(ENDPOINTS.ASSET).fetchAll(
        token
      );
      setProducts(fetchedProducts.data.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={ProductListStyles.content}
      style={ProductListStyles.container}
    >
      <Button
        title="My Devices"
        variant="text"
        onPress={() => navigation.navigate("My Devices")}
      />
      {products &&
        products.map((product: Product) => (
          <Product
            key={product.serial_number}
            product={product}
            navigation={navigation}
          />
        ))}
    </ScrollView>
  );
};

export default ProductList;
