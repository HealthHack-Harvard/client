import { BackHandler, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
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

export default function Profile() {
    const router = useRouter();

    return (
        <View></View>
    );
}

