import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { styles } from './styles';
import { Text, View } from '../../components/Themed';
import { ExternalLink } from '../../components/ExternalLink';

export default function Register() {
    const router = useRouter();

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
                    <TextInput style={styles.input} placeholder='Victor' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Last name:</Text>
                    <TextInput style={styles.input} placeholder='Carvalho' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>CardioVascular Disease:</Text>
                    <TextInput style={styles.input} placeholder='Your diagnosis' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput style={styles.input} placeholder='victor.carvalho@email.com' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput style={styles.input} placeholder='Your password' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password confirmation:</Text>
                    <TextInput style={styles.input} placeholder='Your password' />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    router.replace('/login');
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
