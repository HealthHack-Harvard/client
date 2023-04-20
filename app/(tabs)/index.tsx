import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size: number;
  style?: any;
}) {
  return <FontAwesome {...props} />;
}

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hey, Bruno!</Text>

        <Text style={styles.headerText}>Health overview</Text>
      </View>

      <TouchableOpacity style={styles.todos}>
        <Text style={styles.todoText}>To dos</Text>

        <View style={styles.todoRight}>
          <Text style={styles.todoNotification}>4</Text>
          <Icon name="chevron-right" size={16} color="#2e2e2e" />
        </View>
      </TouchableOpacity>

      <View style={styles.actions}>
        <View style={styles.actionButton}>
          <Icon style={styles.actionIcon} name="heart" size={48} color="#2e2e2e" />
          <Text>Managment Console</Text>
        </View>

        <View style={styles.actionButton}>
          <Icon style={styles.actionIcon} name="heart" size={48} color="#2e2e2e" />
          <Text>Donations</Text>
        </View>

        <View style={styles.actionButton}>
          <Icon style={styles.actionIcon} name="users" size={48} color="#2e2e2e" />
          <Text>Feed</Text>
        </View>

        <View style={styles.actionButton}>
          <Icon style={styles.actionIcon} name="question" size={48} color="#2e2e2e" />
          <Text>Questions</Text>
        </View>
      </View>
    </ScrollView>
  );
}

