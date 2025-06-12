import { colors, typography, spacing } from "@/ui-framework/theme";

export const buttonVariants = {
  primary: {
    backgroundColor: colors.accent,               // Soft lavender
    textColor: colors.accentText,                 // Black (great contrast)
    fontWeight: typography.fontWeight.semibold,
    hoverBackgroundColor: colors.secondary,       // Electric Orchid on hover
    hoverTextColor: colors.primaryText,           // White text
  },

  secondary: {
    backgroundColor: colors.secondary,            // Electric Orchid
    textColor: colors.primaryText,                // White
    fontWeight: typography.fontWeight.medium,
    hoverBackgroundColor: colors.primaryDark,     // Deep purple
    hoverTextColor: colors.primaryText,           // White
  },

  outline: {
    backgroundColor: colors.transparent,          // No fill
    textColor: colors.primary,                    // Royal Purple
    borderColor: colors.primary,                  // Border same as text
    fontWeight: typography.fontWeight.medium,
    hoverBackgroundColor: colors.primaryLight,    // Soft Lilac fill
    hoverTextColor: colors.accentText,            // Black
  },

  ghost: {
    backgroundColor: colors.transparent,
    textColor: colors.primary,
    fontWeight: typography.fontWeight.regular,
    hoverBackgroundColor: colors.primaryLight,
    hoverTextColor: colors.accentText,
  },
};

export const buttonSizes = {
  sm: {
    fontSize: typography.fontSize.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.lg,
  },
  md: {
    fontSize: typography.fontSize.base,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.lg,
  },
  lg: {
    fontSize: typography.fontSize.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: spacing.lg,
  },
};

export const shadowVariant = {
  shadowColor: "#FFF",
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.50,
  shadowRadius: 6,
  elevation: 10,
};
