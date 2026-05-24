import { useContext } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartContext from '../context/CartContext.jsx';
import ProductCard from '../components/Card';

export default function HomeScreen({ navigation }) {
  const { cartItems, addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      image: "https://i.pinimg.com/1200x/a8/a4/f8/a8a4f8095c42cd7b8ca1c957c8efb3ad.jpg",
      type: "Popular"
    },
    {
      id: 2, 
      name: "Smart Watch",
      price: 79.99,
      image: "https://i.pinimg.com/736x/a7/97/07/a797072706fb90f8870f61181e3e192b.jpg",
      type: 'New',
    },
    {
      id: 3, 
      name: "Smart Apple",
      price: 33.99,
      image: "https://i.pinimg.com/736x/a7/f6/a2/a7f6a2cfb4a717cff968251f010d2bcd.jpg",
      type: 'Old'
    },
     {
      id: 4, 
      name: "Smart Ring",
      price: 120.99,
      image: "https://i.pinimg.com/1200x/ec/97/f4/ec97f48cfa8d889ea17d1cfb128cbd89.jpg",
      type: 'New'
    }
  ];

  return (
    <View style={[styles.container]}>
   
      <View style={[styles.header]}>
        <View>
          <Text style={[styles.shop_title]}>Hebron Shop</Text>
          <Text style={[styles.sub_title]}>Choose your favorite gadgets</Text>
        </View>
        
        <Pressable style={[styles.cart_button]} onPress={() => navigation.navigate('Cart')}>
        <Ionicons name="cart-outline" size={24} color="white" />
          <View style={[styles.cartBadge]}>
            <Text style={[styles.cartCount]}>{cartItems.length}</Text>
          </View>
        </Pressable>
      </View>
    <View style={styles.dealCard}>
        <View>
          <Text style={styles.dealTitle}>Special Deals</Text>
          <Text style={styles.dealSubtitle}>Get the best tech accessories with a smooth shopping experience.
          </Text>
        </View>

        <View style={styles.todayBadge}>
          <Text style={styles.todayBadgeText}>Today Only</Text>
        </View>
    </View>


      <ScrollView style={[styles.productsScroll]}>
        {products.map(product => (<ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)}/>))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  shop_title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sub_title: {
    color: 'lightgray',
    fontSize: 14,
  },
  cart_button: {
    position: 'relative',
    padding: 10,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productsScroll: {
    flex: 1,
  },
  // -------------------------------------
  dealCard: {
    backgroundColor: '#0A0F1C',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    position: 'relative',
    marginTop: 20,
},

dealTitle: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 6,
},

dealSubtitle: {
  color: '#9BA4B5',
  fontSize: 14,
  width: '85%',
},

todayBadge: {
  position: 'absolute',
  right: 8,
  top: 50,
  backgroundColor: '#1DB954',
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 50,
},

todayBadgeText: {
  color: 'white',
  fontWeight: '600',
  fontSize: 13,
},

});