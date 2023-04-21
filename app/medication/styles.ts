import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f3f3',
        marginTop: 50,
        marginBottom: 75,
    },
    title: {
        fontSize: 32,
        fontWeight: '400',
        marginTop: -3,
    },
    mainMed: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        marginLeft: 10,
    },
    subText: {
        fontSize: 18,
        fontWeight: '300',
        marginLeft: 10,
        marginTop: 15,
    },
    medTitle: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    boardMed: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        height: "20%",
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tableHeader: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    containerTable: {
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    line: {
        backgroundColor: '#fff',
        gap: 25,
    },
    nameTable: {
        color: '#DC6B72',
        fontWeight: 'bold',
        fontSize: 18,
    }
});
