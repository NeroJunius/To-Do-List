import { Box } from "@chakra-ui/react";
import SignInForm from "../components/SignInForm";
import RightSide from "../components/RightSide";

export default function SignIn() {
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
                    <SignInForm />
                </Box>
            </Box>
        </Box>
    )
}