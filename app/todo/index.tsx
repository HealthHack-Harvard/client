import { BackHandler, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useRouter } from "expo-router";

function Icon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
    size: number;
    style?: any;
}) {
    return <FontAwesome {...props} />;
}

export default function Home() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{
                backgroundColor: "transparent"
            }}>
                <TouchableOpacity style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    width: "auto"
                }} onPress={() => router.back()} >
                    <Icon name="chevron-left" size={20} color="#000" />
                    <Text style={{ ...styles.headerTitle, marginLeft: 10 }}>Todo list</Text>
                </TouchableOpacity>

                <Text style={styles.headerText}>Health overview</Text>
            </View>
        </ScrollView>
    );
}

