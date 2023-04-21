import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { styles } from './styles';
import { Text, View } from '../../components/Themed';
import { ExternalLink } from '../../components/ExternalLink';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pathology, setPathology] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        await axios.post("http://10.254.18.177:3001/v1/user/create", {
            name: name + lastName,
            email: email,
            password: password,
            pathology: pathology
        }).then((response) => {
            console.log("response", response.data)
            router.push("/login")
        }
        ).catch((error) => {
            console.log("error", error)
            alert(error)
        }
        )
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{
            paddingTop: 75,
            paddingBottom: 25,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={styles.header}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>Just a few steps, and we'll be ready to start!</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>First name:</Text>
                    <TextInput style={styles.input} placeholder='Victor' onChangeText={setName}/>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last name:</Text>
                    <TextInput style={styles.input} placeholder='Carvalho' onChangeText={setLastName}/>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>CardioVascular Disease:</Text>
                    <TextInput style={styles.input} placeholder='Your diagnosis' onChangeText={setPathology}/>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput style={styles.input} placeholder='victor.carvalho@email.com' onChangeText={setEmail}/>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput style={styles.input} placeholder='Your password' onChangeText={setPassword}/>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password confirmation:</Text>
                    <TextInput style={styles.input} placeholder='Your password' />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    register()
                }}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    Trust
                </Text>

                <Text style={styles.footerText}>
                    We use blockchain to ensure that your data is safe and secure.
                </Text>
            </View>

            <StatusBar style={'dark'} />
        </ScrollView>
    );
}
