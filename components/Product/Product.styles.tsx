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
    shadowOffset: {
      width: 2,
      height: 18,
    },
    shadowOpacity: 1.58,
    shadowRadius: 16.0,
    elevation: 18,
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
});

export default ProductStyles;
