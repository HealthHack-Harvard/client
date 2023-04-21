import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        marginBottom: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
    boardPerfilEdit: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        marginRight: 25,
        marginTop: 15,
    },
    boardPerfil: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    boardStreak: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    containerBadges: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        backgroundColor: "transparent",
    },
    badge: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f3f3f3',
    }
});