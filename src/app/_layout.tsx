import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, gestureEnabled: true }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sign-up" options={{ presentation: "modal" }} />
      <Stack.Screen name="sign-in" options={{ presentation: "modal" }} />
    </Stack>
  );
}
