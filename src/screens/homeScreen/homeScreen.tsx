import Box from "@src/components/box/box";
import BackGround from "./patterns/background/background";
import Menu from "./patterns/menu/menu";
import theme from "@src/theme/theme";
import Feed from "./patterns/feed/feed";
import Footer from "./patterns/footer/footer";
import Text from "@src/components/text/text";

export default function HomeScreen() {
    return (
        <Box
            tag="main"
            styleSheet={{
                fontFamily: theme.typography.fontFamily,
                backgroundColor: 'grey',
                flex: 1,
                alignItems: 'center'
            }}
        >
            <BackGround />
            <Menu />
            <Feed>
                <Feed.Header />
                <Text tag="h2" variant="heading1">
                    Últimas Atualizações
                </Text>
                <Feed.Posts />
            </Feed>
            <Footer></Footer>
        </Box>
    )
}
