import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StatusBar,
  ActivityIndicator,
  View,
} from 'react-native';
import propTypes from 'prop-types';
// import styles from './styles';
import ProductListItem from '../ProductList/ProductList';

const Products = ({products, getProductData}) => {
  const [apiResponse, setAPIResponse] = useState([]);
  const [editableId, setEditableId] = useState(0);

  useEffect(() => {
    getProductData().then((response) => {
      setAPIResponse(response);
    });
  }, []);

  const deleteProduct = (itemId) => {
    const filteredData = apiResponse.filter((item) => item.id !== itemId);
    setAPIResponse(filteredData);
  };

  const editProduct = (itemId) => {
    const editableItem = apiResponse.find((item) => item.id === itemId);
    setEditableId(editableItem.id);
  };

  const updateProduct = (text) => {
    const editableItem = apiResponse.find((item) => item.id === editableId);
    editableItem.title = text;
    setEditableId(0);
  };

  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor="#0cada8" />
        <Text
          style={{
            padding: 20,
            fontSize: 24,
            backgroundColor: '#0cada8',
            color: '#fff',
          }}>
          Products
        </Text>
        {products.length ? (
          <FlatList
            data={apiResponse}
            renderItem={({item}) => (
              <ProductListItem
                deleteProduct={deleteProduct}
                editProduct={editProduct}
                updateProduct={updateProduct}
                item={item}
                editableId={editableId}
              />
            )}
            keyExtractor={({id}) => id.toString()}
          />
        ) : (
          <View
            style={{
              width: '100%',
              height: '90%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color="#000" />
            <Text>LOADING...</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

Products.propTypes = {
  products: propTypes.array,
  getProductData: propTypes.func,
};

export default Products;
