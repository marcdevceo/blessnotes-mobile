import { SafeAreaView } from "react-native";
import { BaseViewProps } from "./types-spacing";
import { colors, spacing } from "@/ui-framework/theme";

export default function ContainerView({
  children,
  bg = "transparent",
  flex,
  flexDirection,
  justify = "flex-start",
  alignItems = "flex-start",
  alignContent,
  margin = "none",
  mt = "none",
  mb = "none",
  ml = "none",
  mr = "none",
  mx = "none",
  my = "none",
  padding = "none",
  pt = "none",
  pb = "none",
  pl = "none",
  pr = "none",
  px = "none",
  py = "none",
  gap = "none",
  width,
  height,
  borderRadius,
  style,
}: BaseViewProps) {
  return (
    <SafeAreaView
      style={[
        {
          flex: flex,
          flexDirection: flexDirection,
          backgroundColor: colors[bg],
          justifyContent: justify,
          alignItems: alignItems,
          alignContent: alignContent,
          margin: spacing[margin],
          marginTop: spacing[mt],
          marginBottom: spacing[mb],
          marginLeft: spacing[ml],
          marginRight: spacing[mr],
          marginHorizontal: spacing[mx],
          marginVertical: spacing[my],
          padding: spacing[padding],
          paddingTop: spacing[pt],
          paddingBottom: spacing[pb],
          paddingLeft: spacing[pl],
          paddingRight: spacing[pr],
          paddingHorizontal: spacing[px],
          paddingVertical: spacing[py],
          gap: spacing[gap],
          width: typeof width === "string"
              ? spacing[width]
              : width,
          height: typeof height === "string"
              ? spacing[height]
              : height,
          borderRadius:
            typeof borderRadius === "string"
              ? spacing[borderRadius]
              : borderRadius,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}
