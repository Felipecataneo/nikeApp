import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';
import cart from '../../assets/data/cart.js';
import CartListItem from '../components/CartListItem';


const ShoppingCartTotals = () => {

  
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}> US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}> US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}> US$</Text>
        </View>
      </View>
    );
};

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
        scrollEnabled
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  )
};
const styles = StyleSheet.create({
    totalsContainer: {
      margin: 20,
      paddingTop: 10,
      borderColor: 'gainsboro',
      borderTopWidth: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 2,
    },
    text: {
      fontSize: 16,
      color: 'gray',
    },
    textBold: {
      fontSize: 16,
      fontWeight: '500',
    },
  
    button: {
      position: 'absolute',
      backgroundColor: 'black',
      bottom: 30,
      width: '90%',
      alignSelf: 'center',
      padding: 20,
      borderRadius: 100,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 16,
    },
  });

export default ShoppingCart