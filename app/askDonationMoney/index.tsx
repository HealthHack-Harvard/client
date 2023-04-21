import { BackHandler, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useState } from "react";
import React from 'react';
import Pig from "../../assets/images/pig";
import { RadioButton } from 'react-native-paper';

export default function askDonationMoney() {

  const [value, setValue] = React.useState('y');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ask for donation</Text>
        <Pig />
      </View>

      <View style={styles.intro}>
        <Text style={styles.introTittle}>How does the financial donation work?</Text>
        <Text style={styles.introSubhead}>Once you submit the following form, this information will be available to anyone who wants to contribute, with the amount they want, through  PIX payment.</Text>
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
      <View style={styles.form}>
        <Text style={styles.formTittle}>Form</Text>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>For what purpose would you like to make this request?</Text>
            <TextInput style={styles.bigInput} multiline={true}placeholder='Ex: I need to pay for the “x” treatment' />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>What amount (in “reais”) do you want to request?</Text>
            <TextInput style={styles.smallInput} placeholder='Ex: 500' />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>What's your PIX key?</Text>
            <TextInput style={styles.smallInput} placeholder='Ex: CPF, phone number, email' />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>If desired, add a short description to encourage people to contribute</Text>
            <TextInput style={styles.bigInput} multiline={true} placeholder="Ex: hi guys, I'm going through x treatment, and unfortunately my health plan does not cover the value of the x exam" />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Do you want to make an anonymous request?</Text>
            <RadioButton.Group onValueChange={handleChange} value={value}>
              <RadioButton.Item label="Yes" value="y" />
              <RadioButton.Item label="No, I want to share my name" value="n" />
            </RadioButton.Group>
        </View>

        <View style={styles.addButton}>
          <TouchableOpacity style={styles.addPostButton}>
              <Text style={styles.textButton}>Send request</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

