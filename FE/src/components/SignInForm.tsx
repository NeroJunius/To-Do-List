import {
    Box, 
    Button, 
    Flex, 
    FormControl,
    FormLabel, 
    Input, 
    Text, 
    Link
} from "@chakra-ui/react";
import { hookSignIn } from "../hooks/signIn"
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";

export default function SignInForm() {
    const {handleSignIn, handleChange, formLogin} = hookSignIn()
    const navigate = useNavigate();
    
    const { username, password } = formLogin

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("username", event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("password", event.target.value);
    };

    return (
        <Box
            px={"30px"}
            border={"1px"}
            borderColor={"gray.200"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width="31.8125rem"
            height="64rem"
            flexShrink={0}
        >
            <Box mt={"50px"} gap={5}>
                <Box>
                    <Text as={"b"} fontSize={"1.25rem"}>Welcome to To Do List 👋</Text>
                    <Text>Please sign-in to your account, and start manage further</Text>
                </Box>
                <Box mt={7}>
                    <Text as={"b"} fontSize={"1.25rem"}>Sign In</Text>
                </Box>
                <form onSubmit={handleSignIn}>
                <FormControl display={"flex"} flexDirection={"column"} gap={5} mt={5}>
                    <Box>
                        <FormLabel>Username</FormLabel>
                        <Input 
                            placeholder="Your registered username" 
                            width="23.8125rem"
                            height="2.75rem"
                            flexShrink={0}
                            name="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </Box>
                    <Box>
                        <FormLabel>Password</FormLabel>
                        <Input 
                            placeholder="Your password" 
                            type="password" 
                            width="23.8125rem"
                            height="2.75rem"
                            flexShrink={0}
                            name="password"
                            value={password}
                            onChange={handlePasswordChange} 
                        />
                    </Box>

                    <Box mt={10}>
                        <Button
                            color={"white"}
                            width="23.8125rem"
                            height="2.75rem"
                            flexShrink={0}
                            borderRadius="0.3125rem"
                            background="#1571DE"
                            onClick={handleSignIn}
                        >
                            Sign In
                        </Button>
                    </Box>
                </FormControl>
                </form>

                <Flex p={1} gap={2} justifyContent={"center"} mt={10}>
                    <Text>Don't have an account yet?</Text>
                    <Link as={"b"} 
                    color={"#1571DE"}
                    onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}