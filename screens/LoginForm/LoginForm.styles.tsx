import { StyleSheet } from "react-native";

const LoginFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 280,
    marginBottom: 40,
    height: 50,
  },
  heading: {
    marginBottom: 10,
  },
  subheading: {
    color: "#808080",
    marginBottom: 40,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 50,
  },
});

export default LoginFormStyles;
