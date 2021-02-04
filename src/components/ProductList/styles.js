import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 24,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  productContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#dddddd',
    height: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    paddingRight: 70,

    width: '100%',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  updateBtn: {
    backgroundColor: '#2d75eb',
    padding: 10,
    borderRadius: 5,
    elevation: 10,
  },
  deleteBtn: {
    backgroundColor: '#d42626',
    padding: 10,
    borderRadius: 5,
    elevation: 10,
  },
});

export default styles;
