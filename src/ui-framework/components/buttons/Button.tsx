import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { BaseButtonProps } from "./types-buttons";
import { buttonSizes, buttonVariants } from "./buttonVariant";
import { colors, spacing } from "@/ui-framework/theme";

export default function Button({
  title = "",
  onPress,
  buttonVariant = "primary",
  buttonSize = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  style,
  textStyle,
}: BaseButtonProps) {
  const variant = buttonVariants[buttonVariant];
  const size = buttonSizes[buttonSize];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        {
          backgroundColor: disabled
            ? colors.text.secondary
            : variant.backgroundColor,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: fullWidth ? "100%" : undefined,
          paddingHorizontal: size.paddingHorizontal,
          paddingVertical: size.paddingVertical,
          borderRadius: size.borderRadius,
          opacity: disabled || loading ? 0.6 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant.textColor} />
      ) : (
        <>
          {iconLeft && (
            <View style={{ marginRight: spacing.xs }}>{iconLeft}</View>
          )}
          <Text
            style={[
              {
                color: variant.textColor,
                fontSize: size.fontSize,
                fontWeight: variant.fontWeight,
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
          {iconRight && (
            <View style={{ marginRight: spacing.xs }}>{iconRight}</View>
          )}
        </>
      )}
    </Pressable>
  );
}
