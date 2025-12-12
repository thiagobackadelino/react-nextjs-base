import React from 'react';
import NextLink from 'next/link';
import Text from "../text/text";
import { StyleSheet } from "@src/theme/styleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/themeProvider";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(({
  href,
  children,
 
  colorVariant = 'primary', 
  styleSheet,
  colorVariantEnabled = true,
  ...props
}: LinkProps, ref) => {
  const theme = useTheme();
  const isIExternalLink = href.startsWith('http');

  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600,
    }
  };

  const linkProps = {
    tag: 'a',
    ref,
    children,
    href,
    styleSheet: {
      textDecoration: 'none',
      ...(colorVariantEnabled && {
        color: currentColorSet.color,
      }),
      ...styleSheet,
      hover: {
        ...styleSheet?.hover,
        ...(colorVariantEnabled && {
          color: currentColorSet.hover.color,
        })
      },
      focus: {
        ...styleSheet?.focus,
        ...(colorVariantEnabled && {
          color: currentColorSet.focus.color,
        })
      },
    },
    ...props
  }

  if(isIExternalLink) return (
    <Text 
      {...{
        target: '_blank',
        ...linkProps,
      }}
    />
  )

  return (
    <NextLink href={href} passHref>
      <Text {...linkProps} />
    </NextLink>
  )
});

export default Link;