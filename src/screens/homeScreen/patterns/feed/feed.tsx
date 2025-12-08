import Box from "@src/components/box/box";
import Text from "@src/components/text/text";

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

Feed.Header = () =>{
        return(
        <Box>
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