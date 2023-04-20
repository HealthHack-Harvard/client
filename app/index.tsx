import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Text, View } from '../components/Themed';
import { Link } from 'expo-router';

import { styles } from './styles';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>Index</Text>
            <Link href="/login" style={styles.link}>Login</Link>

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}
