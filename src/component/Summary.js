import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";


export const Summary = ({proptdata}) => {

    const [price, setPrice] = useState(0);
    useEffect(() => {
        // คำนวณราคาเมื่อ proptdata เปลี่ยน
        const calculatePrice = (quantity) => {
            const unitPrice = 50;
            const total = quantity * unitPrice;
            setPrice(total);    
            console.log(`ราคารวม: ${total} บาท`);
        };

        calculatePrice(proptdata);
    }, [proptdata]); // dependency array มี proptdata

    return (
        <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>This is Summary Component : {price}</Text>
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