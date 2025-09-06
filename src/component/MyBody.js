import { View, Text, StyleSheet } from "react-native";




const   MyBody = () => {
    return (
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>This is Body Component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bodyContainer: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    bodyText: {
        fontSize: 18,
        color: '#333',
    },
});

export default MyBody;