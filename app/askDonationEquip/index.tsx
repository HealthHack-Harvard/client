import { BackHandler, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { useState } from "react";
import React from 'react';
import MP3 from "../../assets/images/mp3";
import { RadioButton, Checkbox  } from 'react-native-paper';

export default function askDonationEquip() {

  const [value, setValue] = React.useState('w');
  const [checked, setChecked] = React.useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ask for donation</Text>
        <MP3 />
      </View>

      <View style={styles.intro}>
        <Text style={styles.introTittle}>How does the equipment donation work?</Text>
        <Text style={styles.introSubhead}>Once you submit the form below, this information will be available to anyone who wants to contribute. This person will contact you to arrange the conditions of the donation through the contact provided.</Text>
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
            <Text style={styles.label}>Equipment's name</Text>
            <TextInput style={styles.smallInput} multiline={true}placeholder='Ex: Bath chair' />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Does it have any necessary specifications?</Text>
            <TextInput style={styles.smallInput} placeholder='Ex: Chair needs to be child size' />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Do you want to make an anonymous request?</Text>
            <RadioButton.Group onValueChange={handleChange} value={value}>
              <RadioButton.Item label="Whatsapp" value="w" />
              <RadioButton.Item label="Email" value="e" />
              <RadioButton.Item label="Other" value="o" />
            </RadioButton.Group>
        </View>

        <View style={styles.inputContainer}>
            <TextInput style={styles.bigInput} multiline={true} placeholder="Write your chosen contact method here. Ex: (xx)xxxxx-xxxx" />
        </View>

        <View style={styles.checkbox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text>I am aware that the provided contact details {'\n'} will be visible to any user of the platform.</Text>
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

