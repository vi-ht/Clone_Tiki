/* eslint-disable prettier/prettier */

import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  // header
  headerContainer: {
    flexDirection: 'row',
    paddingBottom: 4,
    marginBottom: 15,
  },
  imageHeader: {
    width: width,
    height: 160,
    borderRadius: 4,
  },
  //   body
  bodyContainer: {
    // backgroundColor: '#fff',
    marginLeft: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 5,
    color: '#2f2f2f',
  },
  loginText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#585858',
  },
  inputText: {
    fontSize: 30,
    color: '#282828',
    borderBottomColor: '#282828',
    borderBottomWidth: 1,
    width: width - 40,
  },
  invalidInputText: {
    fontSize: 30,
    color: '#282828',
    borderBottomColor: '#f27278',
    borderBottomWidth: 1,
    width: width - 40,
  },
  buttonNext: {
    backgroundColor: '#ff424e',
    alignItems: 'center',
    height: 40,
    width: width - 40,
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  loginEmail: {
    marginTop: 15,
    marginLeft: width / 4 + width / 40,
    color: '#6d96c4',
  },
  loginEmailText: {
    color: '#0a5cb8',
    fontSize: 17,
  },
  validText: {
    color: 'red',
    fontSize: 17,
    marginBottom: 20,
  },
  //   footer
  footerText1: {
    fontSize: 17,
    color: '#878484',
    fontWeight: '600',
    marginTop: 35,
    marginLeft: width / 2.8,
  },
  footerText2: {
    fontSize: 17,
    color: '#878484',
    fontWeight: '600',
    marginLeft: width / 6,
  },
  footerText3: {
    fontSize: 17,
    color: '#878484',
    fontWeight: '600',
    marginLeft: width / 2.7,
    textDecorationLine: 'underline',
    paddingBottom: 50,
  },
  //    Brand Icons
  brandIconsContainer: {
    flexDirection: 'row',
    marginLeft: width / 3.5,
    marginTop: 13,
    marginBottom: 13,
  },
  brandIcon1: {
    marginRight: 15,
    backgroundColor: 'blue',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#e8e8e8',
  },
  brandIcon2: {
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#e8e8e8',
  },
  brandIcon3: {
    marginRight: 10,
    backgroundColor: 'blue',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#e8e8e8',
  },
});

export default styles;
