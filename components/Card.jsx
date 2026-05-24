import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function ProductCard({product, onAddToCart}) {
  return (
    <View style={styles.card}>
      <ImageBackground 
        source={{uri: product.image}} 
        style={[styles.productImage]}
        resizeMode="cover"
      > 
        <Text style={[styles.brandName]}>{product.type}</Text>
      </ImageBackground>
      
      <View style={[styles.textContent]}>
        <Text style={[styles.productName]}>{product.name}</Text>
        <Text style={[styles.productPrice]}>${product.price}</Text>
      </View>

      <View style={[styles.btnCont]}>
        <Text style={[styles.addButton]} onPress={onAddToCart}> Add to Cart
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(2, 10, 84, 0.13)',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(135, 141, 254, 0.13)',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#f5f5f5',
  },
  textContent: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  brandName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    padding: 3,
    textAlign: 'center',
    width: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(76, 30, 12, 0.7)',
    margin: 10,
  },
  productName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  productPrice: {
    color: 'rgba(84, 134, 199, 1)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnCont: {
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'blue',
    width: '100%',
    color: 'white',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 15,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
});