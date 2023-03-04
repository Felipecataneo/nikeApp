import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { useGetOrderQuery } from '../store/apiSlice';
import CartListItem from '../components/CartListItem';
import { useSelector } from 'react-redux';

const TrackOrder = () => {
  const [ref, setRef] = useState('');
  const { data, isLoading, error } = useGetOrderQuery(ref);
  

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        value={ref}
        onChangeText={setRef}
        placeholder="Your order reference"
      />

      {isLoading && <ActivityIndicator />}
      {data?.status !== 'OK' && <Text>Order not found</Text>}
      {data?.status === 'OK' && (
        <View style={styles.itemContainer}>
          <FlatList
          data={data.data.items}
          renderItem={({ item }) =>
            <>
            <Image source={{ uri: item.product?.image }} style={styles.image}/>
            <Text style={styles.quant}>{item.quantity} items</Text>
            </>
          }
          />
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  input: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  itemContainer: {
    width: '50%',
    flexDirection:'column',
    
    

  },
  image: {
    width: "100%",
    aspectRatio: 1,
    
    

  },
  quant: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
    color:'black',
    backgroundColor:'red',
    

    
  },
});



export default TrackOrder;