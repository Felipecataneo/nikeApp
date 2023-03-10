import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import TrackOrder from './screens/TrackOrder';
import ShoppingCart from './screens/ShoppingCart';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectNumberOfItems, selectCart } from './store/cartSlice';

import { FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  const teste = useSelector(selectCart)
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
        <Stack.Screen
           name="Products" 
           component={ProductsScreen} 
           options={({navigation}) => (
            {headerRight: ()=> (
              <Pressable onPress={() => navigation.navigate('Cart') } style={{ flexDirection:'row'}}>
                <FontAwesome5 name="shopping-cart" size={18} color="gray"/>
                <Text style={{marginLeft:5, fontWeight:'500'}}>{teste}</Text>
              </Pressable>
                ),
                headerLeft: () => (
                  <MaterialCommunityIcons
                    onPress={() => navigation.navigate('Track Order')}
                    name="truck-delivery"
                    size={22}
                    color="gray"
                  />
                ),
              })}/>
        <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={ShoppingCart} options={{presentation:'modal'}} />
        <Stack.Screen name="Track Order" component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export  default Navigation;