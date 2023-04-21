import { BackHandler, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import CardEquipDonate from "../../components/cardEquipDonate";

import Box from "../../assets/images/box";

export default function donateEquip() {
  

  return (
    <View style={styles.container}>
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
        
        <View style={styles.header}>
          <Text style={styles.tittle}>Donate</Text>
          <Box />
        </View>

        <View style={styles.intro}>
          <Text style={styles.introTittle}>How does the equipment donation work?</Text>
          <Text style={styles.introText}>On this page, you will find requests from people who need specific equipment. You can make a donation externally, through the contact provided in the request.</Text>
        </View>

        <View style={styles.content}>
          <CardEquipDonate />

        </View>

      </ScrollView>
    </View>
  );
}

