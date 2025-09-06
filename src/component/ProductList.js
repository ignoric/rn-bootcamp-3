import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { mockProducts } from '../model/mockData';

export const ProductList = () => {
  
  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.productItem}>
        <View style={styles.productInfo}>
          <Text style={styles.productId}>{item.id}</Text>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productCategory}>หมวดหมู่: {item.category}</Text>
          <Text style={styles.productPrice}>ราคา: {item.price} บาท</Text>
          <Text style={styles.productExpiry}>หมดอายุ: {item.expiryDate}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>รายการสินค้า</Text>
      <FlatList
        data={mockProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#4CAF50',
    color: '#fff',
  },
  listContainer: {
    padding: 10,
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
