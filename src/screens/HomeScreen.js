import { View, StyleSheet, Text, Button } from "react-native";
import { Myheader } from "../component/MyHearder";
import { useState } from "react";
import {Summary} from "../component/Summary";

export const HomeScreen = () => {
  const [data, setData] = useState(0);

  return (
    <View style={styles.container}>
      <Myheader />
      <View style={styles.body}>
        <Text style={styles.bodyText}>My data is: {data}</Text>
        <Button title="Click Me" onPress={() => setData(data + 1)} />
      </View>
      <Summary proptdata={data}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyText: {
    fontSize: 18,
    color: "#333",
  },
});

export default HomeScreen;
