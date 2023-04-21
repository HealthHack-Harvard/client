import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:"flex",
      flexDirection:"column",
      alignItems: 'center',
      justifyContent: "flex-start",
      backgroundColor: '#F3F3F3',
      width: '100%',
      height: '100%',
      paddingTop:70,
    },
    
    header:{
      width:'85%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-start',
      backgroundColor: 'transparent',

    },

    tittle:{
      fontSize: 30,
      fontWeight: "400",
      marginBottom: 10,
    },

    intro:{
      width:'85%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-start',
      backgroundColor: 'transparent',

    },

    introTittle:{
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom:3,
    },

    introText:{
      textAlign:'justify',
      marginBottom:10,
    },

    content:{
      backgroundColor: 'none',
      width:'85%',

    },
});
