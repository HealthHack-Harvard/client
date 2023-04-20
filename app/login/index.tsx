import { StatusBar } from 'expo-status-bar';
import { Button, Image, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import { styles } from './styles';
import { Text, View } from '../../components/Themed';
import { ExternalLink } from '../../components/ExternalLink';

export default function Login() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Hey there!</Text>
                <Text style={styles.subtitle}>Welcome to CardioVasc</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} placeholder='example@email.com' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='*******' />
                </View>
                <ExternalLink href='https://google.com' style={styles.forgot}>Forgot password?</ExternalLink>

                <TouchableOpacity style={styles.button}>
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

            <StatusBar style={'auto'} />
        </KeyboardAvoidingView>
    );
}
