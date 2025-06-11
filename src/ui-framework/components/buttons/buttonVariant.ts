import { colors, typography, spacing } from "@/ui-framework/theme";

export const buttonVariants = {
  primary: {
    backgroundColor: colors.accent,
    textColor: colors.text.accent,
    fontWeight: typography.fontWeight.semibold,
  },
  secondary: {
    backgroundColor: colors.secondary,
    textColor: colors.text.primary,
    fontWeight: typography.fontWeight.medium,
  },
  outline: {
    backgroundColor: colors.transparent,
    textColor: colors.primary,
    borderColor: colors.primary,
    fontWeight: typography.fontWeight.medium,
  },
  ghost: {
    backgroundColor: colors.transparent,
    textColor: colors.primary,
    fontWeight: typography.fontWeight.regular,
  },
};

export const buttonSizes = {
  sm: {
    fontSize: typography.fontSize.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.sm,
  },
  md: {
    fontSize: typography.fontSize.base,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.md,
  },
  lg: {
    fontSize: typography.fontSize.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: spacing.md,
  },
};
