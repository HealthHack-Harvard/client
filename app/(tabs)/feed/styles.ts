import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 3,
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
        display: 'flex',
        width: '85%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:"flex-start",
        backgroundColor: 'transparent',
        marginBottom:10,
    },

    tittle:{
        fontSize: 48,
        fontWeight: '400',
    },

    addButton:{
        width: '80%',
        marginBottom:10,
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

    icon:{
        marginRight:10,

    },

    textButton:{
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
    },

    postList:{

    },

    navBar:{

    },
});
