import { View, StyleSheet, Text } from "react-native";

export const Myheader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome to Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#4CAF50",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Myheader;
