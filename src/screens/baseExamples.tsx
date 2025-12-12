import Box from "@src/components/box/box";
import Text from "@src/components/text/text";
import { useTheme } from "@src/theme/themeProvider";
import Link from "@src/components/link/link";
import Button from "@src/components/button/button";

export default function BaseExample() {
    const theme = useTheme();
    return (
        <Box
            tag="main"
            styleSheet={{
                backgroundColor: theme.colors.neutral.x000,
                flex: 1,
                alignItems: 'center',
                gap: '16px'
            }}
        >
            <Text variant="heading1">Botões</Text>
            <Button variant="contained">
                Botão contained
            </Button>
            <Button variant="outlined">
                Botão outlined
            </Button>
             <Button variant="ghost">
                Botão ghost
            </Button>
            {/* <Link colorVariant="negative" href="/sobre">
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
            <Footer></Footer> */}
        </Box>
    )
}
