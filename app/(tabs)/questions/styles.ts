import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: "#f3f3f3",
    },
    headerTitle: {
        fontSize: 38,
        fontWeight: "400",
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
    },
    titleComp: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: "center",
    },
    topRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        backgroundColor: "transparent",
    },
});
