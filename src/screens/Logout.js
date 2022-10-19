import { CurrentRenderContext } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import {
  GetUserNameAction,
  GetUserPasswordAction,
} from "../redux/actions/LoginAction";

const LogoutScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.name);
  const password = useSelector((store) => store.password);
  return (
    <View style={styles.container}>
      <View style={styles.Logout}>
        <Text>Name:</Text>
        <Text>{name}</Text>
        <Text>password</Text>
        <Text>{password}</Text>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            dispatch(GetUserNameAction(""));
            dispatch(GetUserPasswordAction(""));
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "#fff" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  Logout: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 10,
    padding: 30,
  },
  Button: {
    backgroundColor: "#f00",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    padding: 6,
  },
});

export default LogoutScreen;
