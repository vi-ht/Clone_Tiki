/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  // header
  headerContainer: {
    marginLeft: 32,
    marginTop: 70,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  // body
  bodyContainer: {
    marginLeft: 30,
    marginTop: 10,
  },
  bodyText: {
    fontSize: 16,
    marginLeft: 4,
  },
  bodyTextInput: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 50,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    width: width - 50,
  },
  // footer
  footerContainer: {
    marginTop: 175,
    marginLeft: 30,
    marginBottom: 50,
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff424e',
    width: width - 55,
    borderRadius: 5,
    height: 60,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default styles;
