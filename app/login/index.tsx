import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { useState } from 'react';

import { styles } from './styles';
import { Text, View } from '../../components/Themed';
import { ExternalLink } from '../../components/ExternalLink';

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    router.replace('/(tabs)');
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
