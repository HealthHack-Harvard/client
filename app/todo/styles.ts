import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 75,
        paddingBottom: 25,
        paddingHorizontal: 15,
        backgroundColor: "#f3f3f3",
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
        justifyContent: "space-between",
        width: "100%",
    },
    actionButton: {
        display: "flex",
        alignItems: "center",
        width: "23%",
        height: 120,
        backgroundColor: "transparent",
    },
    iconContainer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 100,
        marginBottom: 5,
    },
    actionIcon: {
        marginHorizontal: 15,
        marginVertical: 15,
    },
    colInfos: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 10,
        padding: 20,
    }
});
