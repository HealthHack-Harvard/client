import { BackHandler, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

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
        <View style={styles.container}>
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

                <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 10 }}>
                    {
                        [
                            {
                                title: "Take medicines",
                                done: false
                            },
                            {
                                title: "Monitor diabetes",
                                done: true
                            },
                            {
                                title: "Monitor blood pressure",
                                done: false
                            }
                        ].map(({
                            title, done
                        }, index) =>
                            <View key={title+index} style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: 10,
                                backgroundColor: done ? "#6df09f" : "#dc6b728a",
                                borderRadius: 10, marginBottom: 15,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 2,
                                    height: 2,
                                },
                                shadowOpacity: 0.5,
                            }}>
                                <Text style={{
                                    color: "#000",
                                    fontSize: 16,
                                }}>
                                    {title}
                                </Text>
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        </View>
    );
}

