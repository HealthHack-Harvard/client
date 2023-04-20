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
import Pig from "../../../assets/images/pig";
import MP3 from "../../../assets/images/mp3";
import Money from "../../../assets/images/money";
import Box from "../../../assets/images/box";

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
        <Text style={styles.headerTitle}>Donation Center</Text>
        <Text style={styles.headerText}>"Help to be helped"</Text>
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
        paddingBottom: 10
      }} showsVerticalScrollIndicator={false}>
        <View style={styles.topRow}>
          <View style={{
            width: "42%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            height: 200,
            borderRadius: 20,
            gap: 20,
          }}>
            <Pig />
            <Text style={styles.titleComp}><Text style={{ fontWeight: "bold" }}>Request </Text><Text>Financial Donation</Text></Text>
          </View>
          <View style={{
            width: "42%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            height: 200,
            borderRadius: 20,
            gap: 20,
          }}>
            <MP3 />
            <Text style={styles.titleComp}><Text style={{ fontWeight: "bold" }}>Request </Text><Text>Equipment Donation</Text></Text>
          </View>
        </View>

        <View style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          height: 200,
          borderRadius: 20,
          gap: 20,
        }}>
          <Money />
          <View
            style={{
              width: "50%",
            }}
          >
            <Text style={{
              fontSize: 20,
              fontWeight: "bold",
            }}>Donate in cash</Text>
            <Text style={{
              fontSize: 16,
              width: "100%"
            }}>Unfortunately, many people cannot afford all of their treatment. You can be part of the help someone needs</Text>
          </View>
        </View>
        <View style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          height: 200,
          borderRadius: 20,
          gap: 20,
        }}>
          <Box />
          <View
            style={{
              width: "50%",
            }}
          >
            <Text style={{
              fontSize: 20,
              fontWeight: "bold",
            }}>Donate equipment</Text>
            <Text style={{
              fontSize: 16,
              width: "100%"
            }}>Do you have any equipment that you no longer use that is gathering dust? Maybe it's just what someone needs</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

