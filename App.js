import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartContext from './context/CartContext.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (productId) =>{
  setCartItems(crr_item => {
    const existingItem = crr_item.find(item => item.id === productId);
    if (existingItem.quantity === 1) {
      return crr_item.filter(item => item.id !== productId);
    } 
    else {
      return crr_item.map(item => item.id === productId ? { ...item, quantity : item.quantity - 1 } : item);
    }
  });
};
  const addToCart = (product) => {
    setCartItems(crr_item => {
      const existingItem = crr_item.find(item => item.id === product.id);
      
      if (existingItem) {
        return crr_item.map(item => item.id === product.id ? { ...item, quantity : item.quantity + 1 } : item );
      } 
      else {
        return [...crr_item, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  let cartCount = 0;
  for (let i = 0; i < cartItems.length; i++) 
    cartCount += cartItems[i].quantity;

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++)
    totalPrice += cartItems[i].price * cartItems[i].quantity;
 

  const cartValue = {
    cartItems,
    addToCart,
    clearCart,
    removeFromCart,
    cartCount,
    totalPrice
  };

  return (
    <CartContext.Provider value={cartValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white',}}>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Cart" component={DetailsScreen} options={{title: 'Shopping Cart', headerBackTitle: 'Back'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}