import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({route, navigation}) => {
  const {user} = route.params.myName;
  return (
    <View style={styles.container}>
      <Text>Welcome {user} user!</Text>
      <Text style={styles.htext}>Welcome User!</Text>
      <Button title='Go Back' onPress={()=> navigation.goBack()}></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  htext: {
    color: "green",
    fontSize: 20,
    fontWeight: 'bold'
  },
});
