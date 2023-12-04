import { Box, Image, Text } from "@chakra-ui/react";
import "../assets/css/gradientText.css"

export default function RightSide() {
    return (
        <Box display={"flex"} w={"100%"} flexDir={"column"} >
            <Box mx={20} mt={10} width="23.9375rem">
                <Text
                    className="gradientText"
                    fontFamily="Inter"
                    fontSize="7.3595rem"
                    fontStyle="normal"
                    fontWeight={700}
                    lineHeight="normal"
                    letterSpacing="-0.22081rem"
                    textTransform="uppercase"
                >
                    To Do List
                </Text>
            </Box>
            <Box mx={20} mt={10}>
                <Image
                    src="https://cdn.discordapp.com/attachments/1101348162293207112/1181292116572373106/image.png?ex=65808703&is=656e1203&hm=aea94722423df9d011dfca88c1e218ab7ff977ad6b86c8f991ab0986bf4dbfc8&"
                    width="41.1875rem"
                    height="26.5625rem"
                    flexShrink={0}
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                />
            </Box>
        </Box>
    )
}