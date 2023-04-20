import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },



    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 15
    },

    title: {
        fontSize: 32,
        fontWeight: '400',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '200',
        opacity: 0.75,
        textAlign: 'center',
    },



    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '80%',
        marginVertical: 25,
    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'transparent',
        marginBottom: 15,
    },

    label: {
        fontSize: 16,
        marginBottom: 2,
        fontWeight: '400',
        backgroundColor: 'transparent',
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    forgot: {
        fontSize: 14,
        fontWeight: '200',
        backgroundColor: 'transparent',
        alignSelf: 'flex-end',
        marginBottom: 15,
        textDecorationLine: 'underline',
    },
    button: {
        width: '100%',
        paddingVertical: 8,
        borderRadius: 5,
        backgroundColor: "#DC6B72",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
    },



    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop: 15,
    },

    footerText: {
        fontSize: 16,
        fontWeight: '200',
        textAlign: 'center',
    },
    hairline: {
        backgroundColor: '#000',
        height: 1,
        width: '35%',
        marginHorizontal: 10,
        borderRadius: 1,
    },



    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        backgroundColor: 'transparent',
    },


    
    card: {
        width: '80%',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },



    link: {
        color: '#2e78b7',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
