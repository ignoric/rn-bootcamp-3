import { View, StyleSheet, Text, Button } from "react-native";
import { Myheader } from "../component/MyHearder";
import { useState } from "react";
import {Summary} from "../component/Summary";
import { ProductList } from "../component/ProductList";

export const HomeScreen = () => {
  const [data, setData] = useState(0);

  return (
    <View style={styles.container}>
      <Myheader />
      <ProductList />
      <Summary proptdata={data}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
