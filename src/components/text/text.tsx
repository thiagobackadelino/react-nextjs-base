import { BaseComponent } from "@src/theme/baseComponent";
import { StyleSheet } from "@src/theme/styleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/themeProvider";
import React from 'react';

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2';
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Text({
  styleSheet, 
  variant,
  ...props
}: TextProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      {...props}
    />
  )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
};