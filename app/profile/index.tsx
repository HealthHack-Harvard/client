import { BackHandler, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Icon } from "../../components/BackIcon";
import photoImg from "../../assets/images/photoImage";
import PhotoImg from "../../assets/images/photoImage";
import Fire from "../../assets/images/fire";
import Edit from "../../assets/images/editIcon";


export default function Profile() {
    const router = useRouter();

    return (
        <View style={{
            marginTop: 50,
            marginBottom: 75,
            backgroundColor: "transparent",
        }}>
            <TouchableOpacity style={{
                backgroundColor: "transparent",
                marginLeft: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
            }} onPress={() => {router.back()}}>
                <Icon name="chevron-left" color="#000000" size={28} />
                <Text style={styles.title}>Your Profile</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.boardPerfil}>
                    <View style={styles.boardPerfilEdit}>
                        <View><Edit /></View>
                    </View>
                    <View style={{marginTop: 10, marginBottom:10}}>
                        <View><PhotoImg/></View>
                    </View>
                    <View style={{marginTop:10, marginBottom:10}}>
                        <Text style={{
                            fontSize: 24,
                        }}>Bruno Meira</Text>
                    </View>
                    <View style={{marginTop:10, marginBottom:5}}>
                        <Text><Text style={{fontWeight: "bold"}}>Email: </Text>brunomeira@gmail.com</Text>
                    </View>
                    <View style={{marginTop:5, marginBottom:10}}>
                        <Text><Text style={{fontWeight: "bold"}}>Pathology: </Text>Peripheral arterial disease</Text>
                    </View>
                </View>
                <View style={styles.boardStreak}>
                    <View style={{marginTop: 10}}>
                        <Fire/>
                    </View>
                    <Text style={{fontSize: 18, marginTop: 12, marginBottom:8}}>You have a <Text style={{fontWeight: "bold"}}>10 day</Text> streak!</Text>
                    <Text style={{fontSize: 14, textAlign: "center", marginBottom: 10}}>Keep upgrading your treatment to increase your streak and earn recognition badges!</Text>
                </View>
                <View style={styles.boardStreak}>
                    <View style={styles.containerBadges}>
                        <View style={styles.badge}>
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

    );
}

