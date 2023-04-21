import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
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
        fontSize: 38,
        fontWeight: 'bold',
        marginTop: 25,

    }
});
