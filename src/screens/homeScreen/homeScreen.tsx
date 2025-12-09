import Box from "@src/components/box/box";
import BackGround from "./patterns/background/background";
import Menu from "./patterns/menu/menu";
import Feed from "./patterns/feed/feed";
import Footer from "./patterns/footer/footer";
import Text from "@src/components/text/text";
import { useTheme } from "@src/theme/themeProvider";
import Link from "@src/components/link/link";

export default function HomeScreen() {
    const theme = useTheme();
    return (
        <Box
            tag="main"
            styleSheet={{
                backgroundColor: theme.colors.positive.x100,
                flex: 1,
                alignItems: 'center'
            }}
        >
            <Link colorVariant="negative" href="/sobre">
                Vá para a página Sobre
            </Link>
            <Link href="https://google.com">
                Ir para o google
            </Link>
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
