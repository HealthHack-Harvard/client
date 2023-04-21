import { Link, Stack, useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

export default function NotFoundScreen() {
  const router = useRouter()
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>404</Text>
        <Text style={{
          fontSize: 24,
        }}>Page not found!</Text>

        <TouchableOpacity onPress={() => router.back()} style={styles.link}>
          <Text style={styles.linkText}>Return</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 18,
    color: '#2e78b7',
  },
});
