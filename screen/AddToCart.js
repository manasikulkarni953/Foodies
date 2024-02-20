import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AddToCart = ({ route }) => {
  const { cartItems } = route.params;
  const [items, setItems] = useState(cartItems);

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach(item => {
      total += parseFloat(item.price.replace('₹', ''));
    });
    return total.toFixed(2);
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="shopping-cart" size={24} color="#FF6B6B" />
        <Text style={styles.title}>Your Cart</Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()} // Use index as key
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Price: {item.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <FontAwesome name="minus" size={16} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>1</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <FontAwesome name="plus" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
              <Text style={styles.subtotal}>Subtotal: ₹{(parseFloat(item.price.replace('₹', ''))).toFixed(2)}</Text>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteButton}>
                <FontAwesome name="trash" size={24} color="#FF6B6B" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>₹{calculateTotalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F0',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#404040',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#404040',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    color: '#404040',
  },
  subtotal: {
    fontSize: 16,
    color: '#666666',
    marginTop: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#404040',
  },
  totalAmount: {
    fontSize: 20,
    color: '#FF6B6B',
  },
  checkoutButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    bottom:8
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    
  },
});

export default AddToCart;
