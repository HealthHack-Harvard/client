import { BackHandler, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import Fire from "../../assets/images/fire";
import Medication from "../../assets/images/medication";
import Hospital from "../../assets/images/hospital";
import Board from "../../assets/images/board";
import { useRouter } from "expo-router";

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size: number;
  style?: any;
}) {
  return <FontAwesome {...props} />;
}

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ ...styles.container, flexGrow: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hey, Bruno!</Text>

        <Text style={styles.headerText}>Health overview</Text>
      </View>

      <TouchableOpacity style={styles.todos} onPress={() => router.push("todo")}>
        <Text style={styles.todoText}>To do's</Text>

        <View style={styles.todoRight}>
          <Text style={styles.todoNotification}>4</Text>
          <Icon name="chevron-right" size={16} color="#2e2e2e" />
        </View>
      </TouchableOpacity>

      <View style={{
        ...styles.actions,
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
        marginBottom: 15,
      }}>
        <View style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Icon style={styles.actionIcon} name="heart" size={48} color="#DC6B72" />
          </View>
          <Text style={{
            textAlign: "center"
          }}>Managment Console</Text>
        </View>

        <View style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Icon style={styles.actionIcon} name="inbox" size={48} color="#DC6B72" />
          </View>
          <Text>Donations</Text>
        </View>

        <View style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Icon style={styles.actionIcon} name="users" size={48} color="#DC6B72" />
          </View>
          <Text>Feed</Text>
        </View>

        <View style={styles.actionButton}>
          <View style={styles.iconContainer}>
            <Icon style={styles.actionIcon} name="question" size={48} color="#DC6B72" />
          </View>
          <Text>Questions</Text>
        </View>
      </View>

      <View style={{
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Text style={{ ...styles.headerText, marginRight: 5 }}>
          You got a 10 day streak!
        </Text>
        <Fire />
      </View>

      <View style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        marginTop: 15,
        marginBottom: 10,
      }}>
        <Text style={{
          fontSize: 24,
          fontWeight: "500",
          marginBottom: 10
        }}>Explore the platform</Text>

        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          marginTop: 10,
        }}>
          <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            paddingVertical: 15,
            paddingHorizontal: 5,
            borderRadius: 15
          }}>
            <Medication />
            <Text style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 5
            }}>Manage medications</Text>
          </View>

          <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            paddingVertical: 15,
            paddingHorizontal: 5,
            borderRadius: 15
          }}>
            <Hospital />
            <Text style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 5
            }}>Register appointment</Text>
          </View>

          <View style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            paddingVertical: 15,
            paddingHorizontal: 5,
            borderRadius: 15
          }}>
            <Board />
            <Text style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 5
            }}>Register monitoring item</Text>
          </View>
        </View>

        <View style={styles.colInfos}>
          <Icon
            name="pencil"
            size={32}
            color="#000"
          />
          <Text style={{
            fontSize: 20,
            fontWeight: "700"
          }}>Create a Post!</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: "200"
          }}>Share experiences from your treatment!</Text>
        </View>

        <View style={styles.colInfos}>
          <Icon
            name="money"
            size={32}
            color="#000"
          />
          <Text style={{
            fontSize: 20,
            fontWeight: "700"
          }}>Make a donation</Text>
          <Text style={{
            fontSize: 20,
            fontWeight: "200"
          }}>You can be the help someone is waiting for!</Text>
        </View>
      </View>

      <StatusBar style="dark" />
    </ScrollView >
  );
}

