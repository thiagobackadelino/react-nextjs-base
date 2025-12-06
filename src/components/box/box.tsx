import { BaseComponent } from "@src/theme/baseComponent";
import { StyleSheet } from "@src/theme/styleSheet";
import React from 'react';

interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}