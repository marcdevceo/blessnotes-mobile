import { colors, spacing } from "@/ui-framework";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.gold,
          borderTopLeftRadius: spacing.md, // slightly rounded top corners
          borderTopRightRadius: spacing.md,
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,

          // 💫 Shadow (iOS) + Elevation (Android)
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 12,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700", // bold
          textTransform: "lowercase", // optional style to match your vibe
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "journal") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="journal" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
