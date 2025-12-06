import Box from "@src/components/box/box";
import BackGround from "./patterns/background/background";
import Menu from "./patterns/menu/menu";
import theme from "@src/theme/theme";

export default function HomeScreen() {
    return (
        <Box
            tag="main"
            styleSheet={{
                fontFamily: theme.typography.fontFamily,
                backgroundColor: {
                    lg: 'red',
                    md: 'blue',
                    sm: 'green',
                    xl: 'yellow',
                    xs: 'black'
                }
            }}
        >
            <BackGround />
        </Box>
        )
}
