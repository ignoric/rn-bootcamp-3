import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { mockProducts } from '../model/mockData';

export const ProductList = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
        scrollEnabled={true}
      >
        {mockProducts.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={styles.productItem}
            onPress={() => {
              console.log(`กดเลือกสินค้า: ${item.name} - ราคา: ${item.price} บาท`);
            }}
            activeOpacity={0.7}
          >
            <View style={styles.productInfo}>
              <Text style={styles.productId}>{item.id}</Text>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productCategory}>หมวดหมู่: {item.category}</Text>
              <Text style={styles.productPrice}>ราคา: {item.price} บาท</Text>
              <Text style={styles.productExpiry}>หมดอายุ: {item.expiryDate}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 20,
  },
  productItem: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    minHeight: 120, // กำหนดความสูงขั้นต่ำ
  },
  productInfo: {
    flex: 1,
  },
  productId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 4,
  },
  productExpiry: {
    fontSize: 14,
    color: '#FF9800',
  },
});

export default ProductList;
