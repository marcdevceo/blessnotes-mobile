import { BlurView } from "expo-blur";
import { Platform, StyleSheet } from "react-native";
import { colors, spacing } from "@/ui-framework/theme";

export type TopLevelColorKeys = {
  [K in keyof typeof colors]: (typeof colors)[K] extends string ? K : never;
}[keyof typeof colors];

export default function FrostedCard({
  children,
  intensity = 50,
  tint = "light", // 'light' | 'dark' | 'default'
  borderRadius = "md",
  borderColor = "gold", 
  padding = "lg",
  margin = "sm",
}: {
  children: React.ReactNode;
  intensity?: number;
  tint?: "light" | "dark" | "default";
  borderRadius?: keyof typeof spacing;
  borderColor?: TopLevelColorKeys;
  padding?: keyof typeof spacing;
  margin?: keyof typeof spacing;
}) {
  return (
    <BlurView
      intensity={Platform.OS === "android" ? intensity-25 : intensity}
      tint={tint}
      style={[
        styles.frosted,
        {
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: spacing[borderRadius],
          borderColor: colors[borderColor],
          padding: spacing[padding],
          margin: spacing[margin],
        },
      ]}
    >
      {children}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  frosted: {
    overflow: "hidden",
  },
});
