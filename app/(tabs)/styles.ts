import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 25,
        paddingHorizontal: 15,
    },
    header: {
        display: "flex",
        backgroundColor: "transparent",
    },
    headerTitle: {
        fontSize: 32,
        marginBottom: 5,
    },
    headerText: {
        fontSize: 24,
    },

    todos: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 25,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    todoText: {
        fontSize: 24,
    },
    todoRight: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    todoNotification: {
        backgroundColor: "#DC6B72",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
        color: "#fff",
        fontWeight: "bold",
        marginRight: 8,
    },

    actions: {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "yellow",
        borderWidth: 1,
    },
    actionButton: {
        borderColor: "blue",
        borderWidth: 1,
        display: "flex",
        alignItems: "center",
        width: "23%",
        backgroundColor: "transparent",
    },
    actionIcon: {
        borderColor: "red",
        borderWidth: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: "100%",
        padding: 10,
    }
});
