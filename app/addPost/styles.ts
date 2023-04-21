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
      width: '85%',
      backgroundColor: '#F3F3F3',
      marginBottom:10,
    },

    tittle:{
      backgroundColor: '#F3F3F3',
      width: '100%',
      fontSize: 32,
      fontWeight: '400',

    },

    subhead:{
      fontSize: 18,
      fontWeight: '200',
      opacity: 0.75,
    },

    textHead:{
      textAlign:'justify',

    },

    form:{
      backgroundColor: '#F3F3F3',
      width: '100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },

    inputContainer:{
      width: '85%',
      backgroundColor: '#F3F3F3',

    },

    label:{
      marginBottom:10,

    },

    input:{
      backgroundColor:'#FFFFFF',
      borderRadius: 5,
      width: '100%',
      height: 108,
      marginBottom:10,

    },

    addButton:{
      width: '85%',
      marginBottom:10,
      backgroundColor: "#DC6B"

    },

    addPostButton:{
      width: '100%',
      height: 50,
      paddingVertical: 11,
      borderRadius: 5,
      backgroundColor: "#DC6B72",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    },

    textButton:{
      fontSize: 18,
      fontWeight: '400',
      color: 'white',

    },
});
