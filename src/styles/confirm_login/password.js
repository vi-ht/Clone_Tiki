/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  // header
  headerContainer: {
    marginTop: 40,
    marginLeft: 30,
  },
  headerText1: {
    fontSize: 26,
    fontWeight: '700',
  },
  headerText2: {
    marginTop: 10,
    fontSize: 18,
  },
  headerText3: {
    marginBottom: 45,
    fontSize: 18,
    fontWeight: '700',
  },
  // body
  bodyContainer: {
    marginLeft: 30,
    marginBottom: 230,
  },
  bodyTextInput: {
    width: width - 65,
    borderBottomWidth: 1,
    borderBottomColor: '#2269b0',
    fontSize: 20,
  },
  bodyText: {
    fontSize: 15,
    color: '#f81048',
  },
  // footer
  footerContainer: {
    marginLeft: 30,
  },
  footerButton1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff424e',
    height: 50,
    width: width - 50,
    borderRadius: 5,
  },
  footerText2Container: {
    flexDirection: 'row',
  },
  footerButton2: {
    marginRight: 90,
    marginTop: 20,
  },
  footerText1: {
    color: '#fff',
    fontSize: 20,
  },
  footerText2: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
