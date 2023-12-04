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
import { useNavigate } from "react-router-dom";
import { hookSignUp } from "../hooks/signUp";
import { ChangeEvent } from "react";

export default function SignUpForm() {
    const { handleSignUp, handleChange, formRegister } = hookSignUp();
    const { name, phone, email, username, password } = formRegister

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("name", event.target.value);
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("phone", event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("email", event.target.value);
    };

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("username", event.target.value);
    };
    
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("password", event.target.value);
    };
    
    const navigate = useNavigate();
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
                    <Text>Please sign-up to your account, and start manage further</Text>
                </Box>
                <Box mt={7}>
                    <Text as={"b"} fontSize={"1.25rem"}>Sign Up</Text>
                </Box>
                <form onSubmit={handleSignUp}>
                <FormControl display={"flex"} flexDirection={"column"} gap={5} mt={5}>
                    <Box>
                        <FormLabel>Name</FormLabel>
                        <Input
                            placeholder="Your name"
                            width="23.8125rem"
                            height="2.75rem"
                            flexShrink={0}
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Box>
                    <Box>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                            placeholder="+62"
                            width="23.8125rem"
                            height="2.75rem"
                            flexShrink={0}
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </Box>
                    <Box>
                        <FormLabel>Email</FormLabel>
                        <Input
                            placeholder="example@mail.com"
                            width="23.8125rem"
                            height="2.75rem"
                            flexShrink={0}
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Box>
                    <Box>
                        <FormLabel>Username</FormLabel>
                        <Input
                            placeholder="Your username"
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
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </FormControl>
                </form>

                <Flex p={1} gap={2} justifyContent={"center"} mt={10}>
                    <Text>Don't have an account yet?</Text>
                    <Link 
                    as={"b"} 
                    color={"#1571DE"}
                    onClick={() => navigate("/signin")} 
                    >
                        Login
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}