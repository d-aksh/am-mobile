import { StyleSheet } from "react-native";

const ProductStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 50,
    marginBottom: 20,
    borderRadius: 18,
    marginTop: 50,
    width: 350,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    textAlign: "center",
  },
  headline: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    padding: 10,
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
});

export default ProductStyles;
