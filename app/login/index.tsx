import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Link, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { useState } from 'react';

import { styles } from './styles';
import { Text, View } from '../../components/Themed';
import { ExternalLink } from '../../components/ExternalLink';

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@token', value)
        } catch (e) {
          // saving error
        }
    }

    const auth = async () => {
        await axios.post("http://10.254.18.177:3001/v1/user/auth", {
            email: email,
            password: password
        }).then((response) => {
            console.log("response", response.data.token)
            storeData(response.data.token)
            router.push("/(tabs)") 
        }).catch((error) => {
            console.log("error", error)
            alert(error)
        })
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={styles.header}>
                <Text style={styles.title}>Hey there!</Text>
                <Text style={styles.subtitle}>Welcome to CardioVasc</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder='example@email.com'
                        onChangeText={setEmail} value={email} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='*******'
                        textContentType='password' onChangeText={setPassword} value={password} />
                </View>
                <ExternalLink href='https://google.com' style={styles.forgot}>Forgot password?</ExternalLink>

                <TouchableOpacity style={styles.button} onPress={() => {
                    auth();
                    // Alert.alert('Login', email + password);
                }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Don't have an account? </Text>
                    <Link href='/register' style={styles.link}>Sign up</Link>
                </View>
            </View>

            <View style={styles.separator}>
                <View style={styles.hairline} />

                <Text style={styles.footerText}>or</Text>

                <View style={styles.hairline} />
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    Learn more about CardioVasc
                </Text>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Check out more about our proposal <Link href='/register' style={styles.link}>clicking here</Link>!
                    </Text>

                </View>

            </View>

            <StatusBar style={'dark'} />
        </ScrollView>
    );
}
