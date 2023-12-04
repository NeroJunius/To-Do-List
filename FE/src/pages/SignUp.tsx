import { Box, Container } from "@chakra-ui/react"
import SignUpForm from "../components/SignUpForm"
import RightSide from "../components/RightSide"

export default function SignUp() {

    return (
        <Box>
            <Box
                display={"flex"}
                flexDir={"row"} 
                justifyContent={"space-between"}
                background="#FAFAFA"
            >
                <Box>
                    <RightSide />
                </Box>
                <Box bg={"white"}>
                    <SignUpForm />
                </Box>
            </Box>
        </Box>
    )
}