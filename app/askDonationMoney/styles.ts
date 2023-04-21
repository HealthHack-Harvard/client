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
      marginBottom: 10,
      display:'flex',
      flexDirection:'row',
      backgroundColor: '#F3F3F3',

    },

    headerTitle:{
      fontSize: 30,
      fontWeight: "400",
      marginBottom: 10,
    },

    intro:{
      width:'85%',
      backgroundColor: '#F3F3F3',
      marginBottom: 10,
    },

    introTittle:{
      fontWeight: 'bold',
    },

    introSubhead:{
      textAlign:'justify',

    },

    form:{
      width:'85%',
      display:'flex',
      flexDirection:"column",
      alignItems:'center',
      backgroundColor: '#F3F3F3',

    },

    formTittle:{
      fontSize: 18,
      fontWeight: 'bold',

    },

    inputContainer:{
      width:'100%',
      backgroundColor: '#F3F3F3',

    },

    label:{
      marginBottom:5,

    },

    smallInput:{
      width:'100%',
      height:36,
      backgroundColor: '#FFFFFF',
      borderRadius:5,
      marginBottom:5,
      paddingLeft:10,
    },

    bigInput:{
      width:'100%',
      height:67,
      backgroundColor: '#FFFFFF',
      borderRadius:5,
      marginBottom:5,
      paddingLeft:10,
    },

    addButton:{
      width: '100%',
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
