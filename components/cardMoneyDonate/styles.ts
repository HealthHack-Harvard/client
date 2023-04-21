import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#F3F3F3',

    },
    card: {
      display:'flex',
      flexDirection:"row",
      alignItems:'center',
      backgroundColor:'#FFFFFF',
      marginBottom:10,
      borderRadius:15,
      padding:20,
    },

    precoView:{
      backgroundColor:'#DC6B72',
      width:70,
      height:65,
      borderRadius:15,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginRight:15,

    },

    precoText:{
      color:'#FFFFFF',
      fontWeight: 'bold',

    },

    infoView:{
      backgroundColor:'transparent',
      width:215,

    },

    tittle:{
      fontSize:20,
      color:'#000000',
      fontWeight: 'bold',

    },

    text:{
      color:'#000000',
      fontWeight: 'bold',
      

    },

    secText:{
      color:'#000000',
      fontWeight:'normal',
      
    },

    
});
