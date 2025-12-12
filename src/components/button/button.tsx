import { useTheme } from "@src/theme/themeProvider";
import ButtonBase, { ButtonBaseProps } from "./buttonBase";
import { ButtonSize, buttonSize } from "./buttonSize";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}
export default function Button({
  styleSheet,
  children,
  fullWidth = true,
  colorVariant = 'neutral',
  variant = 'contained',
  size = 'md',
}: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        // [Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        // [Size]
        ...buttonSize[size],
        // [FullWidth]
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;