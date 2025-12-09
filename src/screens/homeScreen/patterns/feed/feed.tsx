import Box from "@src/components/box/box";
import Icon from "@src/components/icon/icon";
import Text from "@src/components/text/text";
import Image from "@src/components/image/image";

interface feedProps {
    children : React.ReactNode
}

export default function Feed({children}){
    return(
        <Box>
            <Text>
                Feed Base
            </Text>
             {children}
        </Box>
    )
}

Feed.Header = () => {
  return (
    <Box
      styleSheet={{
        color: 'white', // theme
      }}
    >
      <Image
        styleSheet={{
          width: '128px',
          height: '128px',
          borderRadius: '100%',
        }}
        src="https://github.com/thiagobackadelino.png"
        alt="Imagem de perfil do Mario Souto"
      />
      <Icon name="github" />
      <Text>
        Feed Header
      </Text>
    </Box>
  )
}

Feed.Posts = () =>{
        return(
        <Box>
            <Text>
                Feed Posts
            </Text>
        </Box>
    )
}