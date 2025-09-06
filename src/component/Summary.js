import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";


export const Summary = ({proptdata}) => {
    return (
        <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>This is Summary Component : {proptdata}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    summaryContainer: {
        padding: 20,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
    },
    summaryText: {
        fontSize: 18,
        color: '#333',
    },
});

export default Summary;