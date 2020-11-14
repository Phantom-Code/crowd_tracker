import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    // paddingBottom: "10%",
    backgroundColor: "#010101",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: "10%",
  },
  title: {
    fontSize: 32,
    color: "#FFF",
    alignSelf: "center",

    fontWeight: "bold",
    marginBottom: 15,
  },

  register_text: {
    fontSize: 15,
    color: "#FFF",
    alignSelf: "center",
    marginBottom: 15,
  },
  register_text_link: {
    fontSize: 15,
    color: "#1C17F3",
    alignSelf: "center",
    marginBottom: 15,
    textDecorationLine: "underline",
  },
  text_input_title: {
    color: "#FFF",
    marginLeft: "10%",
    fontSize: 20,
    marginBottom: 12,
  },
  text_input: {
    backgroundColor: "#2E2E31",
    borderRadius: 10,
    marginLeft: "10%",
    width: "80%",
    height: 40,
    marginBottom: 12,
    textAlign: "center",
    color: "#FFF",
  },
  btn: {
    left: "10%",
    backgroundColor: "#1C17F3",
    width: "80%",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    marginTop: 15,
  },
  btn_text: {
    color: "#FFF",
    alignSelf: "center",
    fontWeight: "bold",
  },
});
