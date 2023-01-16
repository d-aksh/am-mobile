import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import * as SecureStore from "expo-secure-store";

import Product from "../../components/Product/Product.component";
import { createAPIEndpoint, ENDPOINTS } from "../../services/api.service";

import ProductListStyles from "./ProductList.styles";

const ProductList = () => {
  interface Product {
    asset_name: string;
    company: string;
    image_url: string;
    model: string;
    serial_number: string;
    status: string;
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const token = await SecureStore.getItemAsync("access");
      if (token) {
        const fetchedProducts = await createAPIEndpoint(
          ENDPOINTS.ASSET
        ).fetchAll(token);
        setProducts(fetchedProducts.data.data);
      }
    })();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={ProductListStyles.content}
      style={ProductListStyles.container}
    >
      {products &&
        products.map((product: Product) => (
          <Product key={product.serial_number} product={product} />
        ))}
    </ScrollView>
  );
};

export default ProductList;
