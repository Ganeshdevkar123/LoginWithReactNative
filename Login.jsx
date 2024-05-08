import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Login = ({ navigation }) => {
  const [userName, SetUserName] = useState("");
  const [password, SetPassword] = useState("");
  const [checked, SetChecked] = useState(true);
  const [secureTextEntry, setsecureTextEntry] = useState(true);

  const submit = () => {
    if (userName === "erp" && password === "erp") {
      alert(`Welcome ${userName}!, you are successfully login now.`);
      navigation.navigate("Home", { myName: `${userName}` });
    } else {
      alert("Please enter correct Username and Passsword!");
    }
  };

  const resetPassword = () => {
    if (userName != null) {
      // alert("");
    } else {
      alert("please enter valid username");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>POS Transactions</Text>
      <View style={styles.textcenter}>
        <Image source={require("./assets/favicon.png")} />
        <Text style={styles.header1}>The Vision POS</Text>
      </View>

      <View>
        <Text style={styles.inputtxt}>UserName :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username Here..." // Placeholder text
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => SetUserName(actualData)}
        ></TextInput>
        <Text style={styles.inputtxt}>Password :</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Enter Password Here..." // Placeholder text
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(actualData) => SetPassword(actualData)}
          icon={
            <Text
              onPress={() => setsecureTextEntry(!secureTextEntry)}
            >
              <Text>{secureTextEntry ? "Show" : "Hide"}</Text>
            </Text>
          }
          iconPosition="right"
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.btnSpace}>
        <View style={styles.checkbox}>
          <Checkbox
            value={checked}
            onValueChange={() => SetChecked(!checked)}
          />
          <Text>Remember Username</Text>
        </View>
        <Button
          onPress={() => submit()}
          style={styles.handleBtn}
          title="Sign In"
        />
        <Button
          onPress={() => resetPassword()}
          style={styles.btclearn}
          title="Change Password"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },

  header: {
    backgroundColor: "blue",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  header1: {
    fontSize: 25,
    fontWeight: "bold",
  },

  textcenter: {
    textAlign: "center",
    alignItems: "center",
  },

  inputtxt: {
    fontWeight: "bold",
  },

  input: {
    height: 50,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },

  checkbox: {
    flexDirection: "row",
  },

  btnSpace: {
    gap: 10,
  },

  handleBtn: {
    backgroundColor: "red",
    borderRadius: 10,
  },
});
