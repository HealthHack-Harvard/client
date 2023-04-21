import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      display:'flex',
      flexDirection:"column",
      backgroundColor:'#F3F3F3',
    },

    card:{
      width:314,
      borderRadius:15,
      backgroundColor:'#FFFFFF',
      padding:20,
      marginBottom:15,
    },

    topContent:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: "flex-start",
        backgroundColor: 'transparent',
        marginBottom:10,
    },

    imgCard:{
      width:40,
      height:40,
      borderRadius:20,
      marginRight:9,
    },

    userInfo:{

    },

    postDate:{
      fontWeight: 'bold',
      color:'#6E767D',

    },

    userPatho:{
      color:'#6E767D',

    },

    contentPost:{
      textAlign:"justify",
    },
});
