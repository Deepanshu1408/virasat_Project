import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';

const ProductListItem = ({
  item,
  editProduct,
  deleteProduct,
  editableId,
  updateProduct,
}) => (
  <View style={styles.productContainer}>
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '65%',
          borderWidth: 1,
          padding: 5,
          borderRadius: 5,
          borderColor: '#dddddd',
        }}>
        {editableId === item.id ? (
          <TextInput
            style={{fontSize: 16}}
            autoFocus
            multiline
            onEndEditing={(e) => updateProduct(e.nativeEvent.text)}>
            {item.title}
          </TextInput>
        ) : (
          <Text style={{fontSize: 16}}>{item.title}</Text>
        )}
      </View>
      <View>
        <Image source={{uri: item.thumbnailUrl}} style={styles.imageStyle} />
      </View>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => editProduct(item.id)}>
        <View style={styles.updateBtn}>
          <Text style={{color: 'white'}}>Update</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteProduct(item.id)}>
        <View style={styles.deleteBtn}>
          <Text style={{color: 'white'}}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View />
  </View>
);
ProductListItem.propTypes = {
  item: propTypes.object,
  editProduct: propTypes.func,
  deleteProduct: propTypes.func,
  updateProduct: propTypes.func,
  editableId: propTypes.number,
};

export default ProductListItem;
