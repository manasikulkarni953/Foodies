import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from vector-icons
import SearchBar from './Searchbar';

const HomeScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  
  // Dummy data for demonstration
  const [cartItems, setCartItems] = useState([]);
  const restaurantInfo = {
    name: "MANTRA",
    offers: [
      { id: 1, title: "50% off on all pizzas" },
      { id: 2, title: "Buy 1 Get 1 Free on garlic bread" },
      { id: 3, title: "₹200 off on first 3 orders" }
    ],
    menuItems: [
      { id: 1, name: "Veg Pizza", price: "₹100", image: require('../assets/Pizza.jpg') },
      { id: 2, name: "Burger", price: "₹70", image: require('../assets/Burger.jpg') },
      { id: 3, name: "Garlic Bread", price: "₹50", image: require('../assets/garlicbread.jpg') },
      { id: 4, name: "Biryani", price: "₹150", image: require('../assets/Biryani.jpg') },
      { id: 5, name: "Pavbhaji", price: "₹80", image: require('../assets/Pavbhaji.jpg') },
      { id: 6, name: "Thali", price: "₹120", image: require('../assets/Thali.jpg') }
    ]
  };

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
        <TouchableOpacity 
          style={styles.cartIconContainer}
          onPress={() => navigation.navigate('AddToCart', { cartItems })}
        >
          <FontAwesome name="shopping-cart" size={24} color="#FF6B6B"/>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* Offers */}
        <View style={[styles.section, styles.offerSection]}>
          <Text style={[styles.sectionTitle, styles.textPrimary]}>Special Offers</Text>
          {restaurantInfo.offers.map(offer => (
            <TouchableOpacity key={offer.id} style={styles.offerItem} onPress={() => {}}>
              <Text style={styles.offerText}>{offer.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.deliveryButton]} 
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.dineInButton]} 
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Dine-In</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, styles.takeawayButton]} 
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Takeaway</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.textPrimary]}>TRY THIS :</Text>
          {restaurantInfo.menuItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.menuItem} onPress={() => {}}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => addToCart(item)}>
                <FontAwesome name="cart-plus" size={24} color="#FF6B6B" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F0', // Light cream shade background color
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  offerSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#404040', // Dark gray color
  },
  textPrimary: {
    color: '#FF6B6B', // Primary text color (coral)
    textDecorationLine: 'underline', // Add underline
    fontStyle: 'italic', // Add italic style
  },
  offerItem: {
    paddingVertical: 12,
    backgroundColor: '#FFCCBC', // Light coral background for offer items
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 25,
  },
  offerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#404040',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6B6B', // Coral color for buttons
  },
  deliveryButton: {
    backgroundColor: '#FFA07A', // Light salmon color for delivery button
    marginRight: 10,
  },
  dineInButton: {
    backgroundColor: '#FFA07A', // Light blue color for dine-in button
    marginHorizontal: 4,
  },
  takeawayButton: {
    backgroundColor: '#FFA07A', // Light green color for takeaway button
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for button text
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align icon to the right
    marginBottom: 20,
    backgroundColor: '#FFFFFF', // White background for menu items
    borderRadius: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#404040',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#666666',
  },
  cartIconContainer: {
    right:30,
    bottom:15,
    borderRadius: 20, // Rounded corners
    padding: 10, 
  }
});

export default HomeScreen;
