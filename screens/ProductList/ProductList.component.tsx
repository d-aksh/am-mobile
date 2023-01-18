import { useEffect, useState } from "react";
import { ScrollView, ToastAndroid } from "react-native";
import { Button } from "@react-native-material/core";

import authService from "../../services/auth.service";
import { createAPIEndpoint, ENDPOINTS } from "../../services/api.service";

import Product from "../../components/Product/Product.component";

import ProductListStyles from "./ProductList.styles";
import Menu from "../../components/Menu/Menu.component";

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
    const token = await authService.getAuthToken();
    if (token) {
      const fetchedProducts = await createAPIEndpoint(ENDPOINTS.ASSET).fetchAll(
        token
      );
      setProducts(fetchedProducts.data.data);
    } else {
      navigation.navigate("Home");
      ToastAndroid.show("Session Expired.", ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    getProducts();

    const willRefetchOnFocus = navigation.addListener("focus", () => {
      getProducts();
    });

    return willRefetchOnFocus;
  }, []);

  return (
    <ScrollView
      contentContainerStyle={ProductListStyles.content}
      style={ProductListStyles.container}
    >
      <Menu>
        <Button
          title="My Devices"
          onPress={() => navigation.navigate("My Devices")}
        />
      </Menu>
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
