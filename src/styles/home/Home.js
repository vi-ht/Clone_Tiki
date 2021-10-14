/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const stylesHome = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 4,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    width: width - 100,
    paddingLeft: 20,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
    marginBottom: 4,
  },
  inputText: {
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
    height: 40,
    width: width - 70,
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backContainer: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2f2f2f',
    marginVertical: 12,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  // see more
  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },
});

export default stylesHome;
