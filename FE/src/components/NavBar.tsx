import { Box, Button, Flex, LinkBox, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useCategory } from "../hooks/useCategory";
import CategoryModal from "./modals/CategoryModal";

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { categories, form, getCategories, handleCategory, handleChange} = useCategory()

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <Box m={5} display={"flex"} textAlign={"center"} justifyContent={"center"} >
            <LinkBox>
                <Flex p={3} alignItems={"center"}>
                    <Button variant={"ghost"}>All Tasks</Button>
                </Flex>
                {categories.map((data) => (
                    <Flex p={3} alignItems={"center"} key={data._id}>
                        <Button variant={"ghost"}>{data.name}</Button>
                    </Flex>
                ))}
                <Flex p={3} alignItems={"center"}>
                    <Button variant={"ghost"} onClick={onOpen}>+ New Category
                        <CategoryModal isOpen={isOpen} onClose={onClose}/>
                    </Button>
                </Flex>
            </LinkBox>
        </Box>
    )
}