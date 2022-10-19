import {
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import {
  GetUserNameAction,
  GetUserPasswordAction,
} from "../redux/actions/LoginAction";
const LoginScreen = ({ navigation }) => {
  const name = useSelector((store) => store.name);
  const password = useSelector((store) => store.password);
  const dispatch = useDispatch();
  const setUserName = (name) => {
    dispatch(GetUserNameAction(name));
  };
  const setPassword = (password) => {
    dispatch(GetUserPasswordAction(password));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.login}>
        <Text style={styles.Label}>Name</Text>
        <TextInput
          style={styles.Input}
          onChangeText={(text) => setUserName(text)}
          value={name}
        ></TextInput>
        <Text style={styles.Label}>password</Text>
        <TextInput
          style={styles.Input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        ></TextInput>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            if (name != "" && password != "") {
              navigation.navigate("Logout");
            }
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
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
  login: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 20,
    alignItems: "center",
    paddingVertical: 30,
  },
  Label: {
    fontWeight: "bold",
    paddingRight: 20,
  },
  Input: {
    elevation: 20,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 20,
    padding: 5,
    width: "80%",
  },
  Button: {
    backgroundColor: "#f00",
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    padding: 6,
  },
});

export default LoginScreen;
