import { View, TextInput, Text } from "react-native";
import { colors, spacing, typography } from "@/ui-framework/theme";
import { InputFieldProps } from "./types-form";

export default function InputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
}: InputFieldProps) {
  return (
    <View style={{ marginBottom: spacing.md }}>
      {label && (
        <Text
          style={{
            color: colors.primaryText,
            fontSize: typography.fontSize.sm,
            fontWeight: typography.fontWeight.medium,
            marginBottom: spacing.xs,
          }}
        >
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.subdued}
        style={{
          backgroundColor: colors.accent,
          borderColor: error ? colors.error : colors.border,
          borderWidth: 1,
          borderRadius: spacing.sm,
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.sm,
          fontSize: typography.fontSize.base,
          color: colors.primaryText,
        }}
      />
      {error && (
        <Text
          style={{
            color: colors.error,
            fontSize: typography.fontSize.sm,
            marginTop: spacing.xs,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
}
