import { BackHandler, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import Money from "../../assets/images/money";
import CardMoneyDonate from "../../components/cardMoneyDonate";

export default function donateMoney() {
  

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
          <Money />
        </View>

        <View style={styles.intro}>
          <Text style={styles.introTittle}>How does the financial donation work?</Text>
          <Text style={styles.introText}>On that page, you will find requests from people who need some financial help. You can contribute the amount you want, regardless of the total amount requested, and this transaction will take place externally to the platform, through the PIX.</Text>
        </View>

        <View style={styles.content}>
          <CardMoneyDonate />
        </View>

      </ScrollView>
    </View>
  );
}

