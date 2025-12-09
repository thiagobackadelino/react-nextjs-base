import { BaseComponent } from "@src/theme/baseComponent";
import { StyleSheet } from "@src/theme/styleSheet";

interface ImageProps {
  src: string;
  alt: string;
  styleSheet?: StyleSheet; 
}
export default function Image({ src, alt, ...props }: ImageProps) {
  return (
    <BaseComponent
      as="img"
      src={src}
      alt={alt}
      {...props}
    />
  )
}