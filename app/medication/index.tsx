import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { styles } from './styles';
import { Text, View } from '../../components/Themed';
import { ExternalLink } from '../../components/ExternalLink';
import { Icon } from '../../components/BackIcon';

export default function Medication() {

    const router = useRouter();

    return (
        <ScrollView style={styles.container} contentContainerStyle={{
            paddingTop: 50,
            paddingBottom: 25,
        }}>
            <View style={{
                backgroundColor: 'transparent',
            }}>
                <TouchableOpacity style={styles.mainMed} onPress={() => {router.back()}}>
                    <Icon name='chevron-left' size={28} color='#000'></Icon>
                    <Text style={styles.title}>Medication</Text>
                </TouchableOpacity>
                <Text style={styles.subText}>Here you can find all of your medication, be free to add or exclude meds at any time! </Text>
            </View>
            <View>
                <View style={styles.medTitle}>
                    <Text>daily meds</Text>
                </View>
            </View>
        </ScrollView>
    );
}
