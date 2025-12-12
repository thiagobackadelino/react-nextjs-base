import Box from "@src/components/box/box";
import Text from "@src/components/text/text";
import { useTheme } from "@src/theme/themeProvider";
export default function Footer(){
    const theme = useTheme();
    return(
        <Box 
        styleSheet={{
            height: '120px',
            backgroundColor: theme.colors.neutral.x900,
            width: '100%',
            heigth: '120px',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text variant="body2">
                Feito por Thiago Back Adelino. 
            </Text>
        </Box>
    )
}