import Box from "@src/components/box/box"
import Button from "@src/components/button/button";
import Icon from "@src/components/icon/icon";
import Text from "@src/components/text/text"
import { useTheme } from "@src/theme/themeProvider"

export default function Menu() {
    const theme = useTheme();
    return (
        <Box styleSheet={{
            position: 'absolute',
            left: 0 , right: 0, top: 0,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal:'16px',
            paddingVertical:'16px',
            color: theme.colors.neutral.x000
        }}>
        
        <Button.Base>
            <Text>
                menu
            </Text>
        </Button.Base>
         <Button.Base>
            <Icon name="github"/>
        </Button.Base>
        </Box>
    )
}