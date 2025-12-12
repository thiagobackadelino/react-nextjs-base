import { BaseComponent } from "@src/theme/baseComponent";
import { StyleSheet } from "@src/theme/styleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/themeProvider";
import React from 'react';

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
  ref: any;
}
const Text = React.forwardRef(({
  tag,
  styleSheet, 
  variant,
  ...props
}: TextProps, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...styleSheet,
      }}
      ref={ref}
      {...props}
    />
  )
})

export default Text;