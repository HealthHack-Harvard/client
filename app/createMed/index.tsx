import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { styles } from './styles';
import { Text, View } from '../../components/Themed';
import { ExternalLink } from '../../components/ExternalLink';
import { Icon } from '../../components/BackIcon';

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
                <TouchableOpacity style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    gap: 15,
                }} onPress={() => {router.back()}}>
                    <Icon name="chevron-left" size={24} color="black"/>
                    <Text style={styles.title}>Add Medication</Text>
                </TouchableOpacity>
                
                <Text style={styles.subtitle}>Here you can find all of your medication, be free to add or exclude meds at any time!</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput style={styles.input} placeholder='Dipiroca' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Dosage:</Text>
                    <TextInput style={styles.input} placeholder='10ml' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Time:</Text>
                    <TextInput style={styles.input} placeholder='10pm' />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Observation:</Text>
                    <TextInput style={styles.input} placeholder='Realy Strong Pill, Take cara about it.' />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    router.replace('/login');
                }}>
                    <Text style={styles.buttonText}>Save Changes</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style={'auto'} />
        </ScrollView>
    );
}
