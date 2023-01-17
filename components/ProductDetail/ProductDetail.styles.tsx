import { StyleSheet } from "react-native";

const ProductDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 18,
    alignContent: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 2,
      height: 18,
    },
  },
  image: {
    alignContent: "center",
    justifyContent: "center",
    height: 250,
  },
  text: {
    textAlign: "center",
  },
  headline: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  button: {
    shadowOpacity: 1.58,
    shadowRadius: 12.0,
    elevation: 12,
  },
  textbox: {
    marginBottom: 20,
    borderRadius: 20,
  },
});

export default ProductDetailStyles;
