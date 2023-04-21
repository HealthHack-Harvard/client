import { BackHandler, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Icon } from "../../components/BackIcon";
import photoImg from "../../assets/images/photoImage";
import PhotoImg from "../../assets/images/photoImage";
import Fire from "../../assets/images/fire";
import Edit from "../../assets/images/editIcon";

import nft from "../../assets/images/nft.png";


export default function Profile() {
    const router = useRouter();

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#f3f3f3',
        }} contentContainerStyle={{
            paddingTop: 75,
            paddingBottom: 25,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <TouchableOpacity style={{
                backgroundColor: "transparent",
                marginLeft: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
            }} onPress={() => { router.back() }}>
                <Icon name="chevron-left" color="#000000" size={28} />
                <Text style={styles.title}>Your Profile</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.boardPerfil}>
                    <View style={styles.boardPerfilEdit}>
                        <View><Edit /></View>
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <View><PhotoImg /></View>
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{
                            fontSize: 24,
                        }}>Bruno Meira</Text>
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 5 }}>
                        <Text><Text style={{ fontWeight: "bold" }}>Email: </Text>brunomeira@gmail.com</Text>
                    </View>
                    <View style={{ marginTop: 5, marginBottom: 10 }}>
                        <Text><Text style={{ fontWeight: "bold" }}>Pathology: </Text>Peripheral arterial disease</Text>
                    </View>
                </View>
                <View style={styles.boardStreak}>
                    <View style={{ marginTop: 10 }}>
                        <Fire />
                    </View>
                    <Text style={{ fontSize: 18, marginTop: 12, marginBottom: 8 }}>You have a <Text style={{ fontWeight: "bold" }}>10 day</Text> streak!</Text>

                    <TouchableOpacity style={{
                        backgroundColor: "#f37c0c",
                        padding: 10,
                        width: "80%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 15,
                        marginBottom: 15,
                    }}>
                        <Text style={{
                            color: "#ffffff",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>Claim badge</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 14, textAlign: "center", marginBottom: 10 }}>Keep upgrading your treatment to increase your streak and earn recognition badges!</Text>
                </View>

                <View style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                }}>
                    <Text style={{
                        marginTop: 20,
                        fontSize: 20,
                        fontWeight: "500",
                    }}>Your badges</Text>
                    <View style={styles.boardStreak}>
                        <View style={styles.containerBadges}>
                            <View style={styles.badge}>
                                <Image style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 100,
                                }} source={nft} />
                            </View>
                            <View style={styles.badge}>
                            </View>
                            <View style={styles.badge}>
                            </View>
                            <View style={styles.badge}>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>

    );
}

