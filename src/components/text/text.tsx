import { BaseComponent } from "@src/theme/baseComponent";
import { StyleSheet } from "@src/theme/styleSheet";
import theme from "@src/theme/theme";
import React from 'react';

interface TextProps {
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2';
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Text({
  styleSheet,
  ...props
}: TextProps) {

  return (
    <BaseComponent
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
      }}
      {...props}
    />
  )
}

Text.defaultProps = {
  tag: 'p',
};