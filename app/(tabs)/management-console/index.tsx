import { BackHandler, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Medical from "../../../assets/images/MedIcon";
import Building from "../../../assets/images/buildingIcon";
import Plan from "../../../assets/images/planIcon";

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
                width: "90%",
                backgroundColor: "transparent",
                marginBottom: 35,
            }}>
                <Text style={styles.headerTitle}>Management Console</Text>
                <Text style={styles.headerText}>Give us the detail about your treatment, and we'll do the rest!</Text>
            </View>
            <ScrollView style={{
                width: "100%",
                display: "flex",
                backgroundColor: "transparent",
            }} contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: 20,
            }} showsVerticalScrollIndicator={false}>
                <View style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFFFFF",
                    height: 200,
                    borderRadius: 20,
                    gap: 20,
                }}>
                    <Medical/>
                    <Text style={styles.titleComp}>Medication</Text>
                </View>
                <View style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFFFFF",
                    height: 200,
                    borderRadius: 20,
                    gap: 20,
                }}>
                    <Building/>
                    <Text style={styles.titleComp}>Appointments/Exams</Text>
                </View>
                <View style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFFFFF",
                    height: 200,
                    borderRadius: 20,
                    gap: 20,
                }}>
                    <Plan/>
                    <Text style={styles.titleComp}>Monitoring</Text>
                </View>
            </ScrollView>
        </View>
    );
}

