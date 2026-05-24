import { useContext } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native';
import CartContext from '../context/CartContext.jsx';

export default function DetailsScreen({ navigation }) {
  const { cartItems, clearCart, totalPrice, removeFromCart } = useContext(CartContext);

  return (
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <Text style={[styles.title]}>Your Cart</Text>
        <Text style={[styles.subtitle]}>Review items before checkout</Text>
      </View>

      <ScrollView style={[styles.cartItems]}>
        {cartItems.map((item, index) => (
          <View key={index} style={[styles.cartItem]}>
            <View style={[styles.item_info, styles.flexx]}>

            <View style={[styles.iconCircle]}>
          <Text style={[styles.iconText]}>{item.name[0]}</Text>
          </View>
              <View>
            <Text style={[styles.itemName]}>{item.name}</Text>
              <Text style={[styles.item_price]}> 
                ${item.price} x {item.quantity}
              </Text>
              </View>
            </View>
            <View style={[styles.quantCont]}>
                <Pressable onPress={() => removeFromCart(item.id)} style={[styles.quant_btn]}>
                  <Text style={[styles.quan_btn_txt]}>-</Text>
                </Pressable>
                <Text style={[styles.quant_txt]}>x {item.quantity}</Text>
              </View>
          </View>
        ))}
      </ScrollView>

      <View style={[styles.footer]}>
        <View style={[styles.totalSection]}>
          <Text style={[styles.totalText]}>Total</Text>
          <Text style={[styles.totalPrice]}>${totalPrice}</Text>
        </View>
        
        <View style={[styles.buttons]}>
          <Pressable style={[styles.clearButton]} onPress={clearCart}>
            <Text style={[styles.clear_btn_txt]}>Clear Cart</Text>
          </Pressable>
          <Pressable style={[styles.check_btn]}>
            <Text style={[styles.check_btn_txt]}>Checkout</Text>
          </Pressable>
        </View>
      </View>
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
    marginBottom: 30,
  },
  title: {
    color: 'white', 
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#ffffffff', 
    fontSize: 16,
  },
  cartItems: {
    flex: 1,
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ff12',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#0D0D0D',
    marginBottom: 12,

  },
  item_info: {
    flex: 1,
  },
  itemName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  item_price: {
    color: '#666',
    fontSize: 16,
  },
   quantCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quant_btn: {
    backgroundColor: 'balck',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ff12'
  },
  quan_btn_txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  quant_txt: {
    color: '#666',
    fontSize: 16,
  },
  footer: {
    marginTop: 'auto',
    borderWidth: 1,
    borderColor: '#ff12',
    padding: 10,
    borderRadius: 15,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
  },
  totalText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  totalPrice: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  clearButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 30,
    flex: 1,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    alignItems: 'center',
  },
  check_btn: {
    backgroundColor: 'rgba(28, 52, 91, 1)',
    textAlign: 'center',
    borderRadius: 6,
    padding: 5,
    paddingTop: 10,
    height: 50,
    alignSelf: 'center',
    width: 100,
    alignItems: 'center',
    borderRadius: 20,
  },
  clear_btn_txt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  check_btn_txt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  iconCircle: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#222',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 15,
},

iconText: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
},
flexx: {
  flexDirection: 'row',
  gap: 5,
  marginLeft: 10,
}
});