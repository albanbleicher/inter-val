var React = require('react-native');

var {
  StyleSheet,
} = React;



let mainColor = "#5272FF";
let darkColor = "#212121";


module.exports = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily:'RalewayBold',
    fontSize:50,
    color:'#5273FF'
  },
  btnBleu:{
    fontFamily:'Raleway',
    backgroundColor:mainColor,
    borderRadius:100,
    paddingHorizontal:60,
    paddingVertical:15,
    minWidth:270,
    margin:5
  },

  textBtnBleu:{ fontSize: 22, color: '#fff', fontFamily:'Raleway' },
  btnBlancB:{
    fontFamily:'Raleway',
    backgroundColor:'#fff',
    borderColor:mainColor,
    borderWidth:3,
    borderRadius:100,
    paddingHorizontal:60,
    paddingVertical:15,
    margin:5
  },

  textBtnBlancB:{ fontSize: 22, color: mainColor, fontFamily:'Raleway' },
  sub:{
    color:mainColor,
    margin:5,
    fontSize:20,
    marginBottom:30
  },
  blueSmallText:{
    color:mainColor,
    margin:5
  },
  launchImg:{
    width:300,
    height:250,
    resizeMode:'contain',
    marginTop:50,
    marginBottom:50
  },
  topEmoji: {
    width:70,
    height:90,
    resizeMode:'contain',
    marginBottom:20
  },
  field:{
    fontSize:15,
    color:mainColor,
    paddingHorizontal:40,
    paddingVertical:15,
    borderColor:mainColor,
    borderWidth:2,
    borderRadius:100,
    width:280,
    margin:5
  }

});
