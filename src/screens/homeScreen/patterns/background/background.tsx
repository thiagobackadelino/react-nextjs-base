import Box from "@src/components/box/box";
import { useTheme } from "@src/theme/themeProvider";

export default function Background() {
  const imagemUrl = "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const theme = useTheme();
  return (
    <Box 
        styleSheet={{
        width: '100%',
        height: '400px',
        backgroundColor: theme.colors.primary.x900,
        //backgroundImage: `url("${imagemUrl}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
    </Box>
  )
}

