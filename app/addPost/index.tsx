import { Text, View } from "../../components/Themed";
import EditScreenInfo from "../../components/EditScreenInfo";
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import { styles } from './styles';
import { RadioButton } from 'react-native-paper';
import { Link, useRouter } from "expo-router";

import { Entypo } from '@expo/vector-icons';

export default function addPost() {

  const data = [
    { value: 'Yes' },
    { value: 'No' },
  ];

  const [value, setValue] = React.useState('y');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
      <KeyboardAvoidingView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.tittle}>Create Post</Text>
            <Text style={styles.subhead}>How does the post feed work?</Text>
            <Text style={styles.textHead}>As soon as you click send, your post will be available to anyone on the platform, creating a large support network of experiences, achievements and outbursts.</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>What do you want to share?</Text>
                <TextInput style={styles.input} placeholder='Write here some experience or achievement you have in relation to your treatment!' />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Do you want to share your pathology with people?</Text>
                <RadioButton.Group onValueChange={handleChange} value={value}>
                  <RadioButton.Item label="Yes" value="y" />
                  <RadioButton.Item label="No" value="n" />
                </RadioButton.Group>
            </View>

            <View style={styles.addButton}>
              <TouchableOpacity style={styles.addPostButton}>
                  <Text style={styles.textButton}>Post</Text>
              </TouchableOpacity>
            </View>

          </View>

          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      </KeyboardAvoidingView>
  );
}
