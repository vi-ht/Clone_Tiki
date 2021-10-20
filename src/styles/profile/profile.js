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
     backgroundColor: '#1A8CFF',
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
    fontSize:21,
  },
  authText: {
    marginTop:5,
    color: '#1e88e5',
    fontSize: 16,
    fontWeight: '700',
    backgroundColor: '#fff',
    width:160,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:9,
    paddingRight:5,
    borderRadius:3,
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
    fontSize:18,
    fontWeight: '700',
  },
  itemTitle: {
    flex: 1,
    color: '#1e1e1e',
    paddingLeft: 20,
    fontSize:16,
  },
  divider: {
    height: 8,
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
    paddingLeft:20,
    height:52,
    flexDirection: 'row'
  },
  icon:{
      width:65,
      marginRight:10,
      marginLeft:5,
  },
  title:{
    width:95,
    //backgroundColor: 'pink'
  },
  titleText:{
    marginTop: 15,
    marginLeft: -5,
    fontSize: 16,
  },
  iconText:{
    fontSize: 13,
    flex: 1,
    color: '#1e1e1e',
    textAlign:'center'
  },
  titleSmallText:{
    marginTop: 0,
    fontSize: 14,
    color: 'gray',
    marginLeft: -5,
  },
  img:{
    marginTop:4,
    marginLeft:1,
    height:60,
    width:60,
  },
  boxContainer:{
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:10,
    marginBottom:0,
  },
  sectionContainer:{
    backgroundColor:'#fff',
    height: 150,
    marginBottom:8,
  
  },
  innerContainer:{
    height: 30,
    flexDirection: 'row',
    marginTop:10,
    fontSize: 17,

  },
  iconContainer:{
    height: 120,
    width:70,
    marginRight:15,
    marginLeft:15,
    marginBottom:10,
  },
  imgIcon:{
    height:70,
    width:70,
  },
  profileIcon:{
    height:30,
    width:30,
  },
  itemHistory:{
    color:'#1e88e5',
    fontWeight:'700',
    marginRight: 30,
    fontSize:16,
  }

});

export default styles;