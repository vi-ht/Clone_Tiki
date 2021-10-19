/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    backgroundColor: '#ededed',
    
  },
  userContainer: {
    //backgroundColor: '#fff',
     backgroundColor: '#1e88e5',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
    marginTop: -50,
    paddingBottom:50,
    borderBottomLeftRadius:35,
    borderBottomRightRadius:35,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#fff',
  },
  authText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
    paddingLeft: 20,
  },
  divider: {
    height: 10,
  },
  tikiXuContainer:{
    height: 70,
    backgroundColor: '#fff',
    width: 180,
    borderRadius: 15,
    marginLeft:10,
    marginTop: -30,
    flexDirection: 'row',
  },
  container: {
    //flex: 10,
    paddingLeft:20,
    height:80,
    flexDirection: 'row'
  },
  icon:{
      width:65,
     // backgroundColor: 'pink',
      marginRight:10,
      marginLeft:5,
  },
  title:{
    width:95,
    //backgroundColor: 'pink'
  },
  titleText:{
    // color: '#000',
    // //fontWeight: 700,
    marginTop: 15,
    fontSize: 16,
  },
  titleSmallText:{
    marginTop: 0,
    fontSize: 14,
    color: 'gray'
  }

});

export default styles;