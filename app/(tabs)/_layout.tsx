import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28}  {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#DC6B72",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#f4f4f4",
          borderTopColor: "transparent",
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="donations/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="feed/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="five/index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="question" color={color} />,
        }}
      />
    </Tabs >
  );
}

//
