import { StyleSheet } from "react-native";

import { Text, View } from "../../../components/Themed";
import EditScreenInfo from "../../../components/EditScreenInfo";
import { styles } from "./styles";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
    </View>
  );
}
