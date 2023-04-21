import { Text, View } from "../../../components/Themed";
import EditScreenInfo from "../../../components/EditScreenInfo";

import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, TouchableOpacity, ScrollView, Button, Alert, TouchableHighlight, StyleSheet, Platform } from 'react-native';

import { styles } from './styles';
import Card from '../../../components/card/index';

import { Entypo } from '@expo/vector-icons';

import { useNavigation, useRouter } from "expo-router";

export default function TabFourScreen() {

  const router = useRouter()

  return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.tittle}>Feed</Text>
            <TouchableOpacity onPress={()=>Alert.alert('Left button pressed')}>
                <View>
                    <Text><Entypo name="info-with-circle" size={24} color="black" background="none" /></Text>
                </View>
            </TouchableOpacity>
          </View>

          <View style={styles.addButton}>
            <TouchableOpacity style={styles.addPostButton} onPress={() => {router.push("/addPost")}}>
                <Text style={styles.textButton}>Create Publication</Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.postList}>
            <Card />
          </View>
          </ScrollView>
          

          <View style={styles.navBar}>
          </View>
          <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

      </View>
  );
}
