import { Box, Center, Container, Divider, Text } from "@chakra-ui/react";
import ListTask from "../components/ListTask";
import NavBar from "../components/NavBar";
import { ITaskList } from "../interfaces/taskList";
// import { useToDo } from "../hooks/useToDo";
// import { useEffect } from "react";

export default function Home(props: ITaskList) {
    // const {task, getTask} = useToDo()
    // useEffect(() => {
    //     getTask()
    // }, [])
    return (
        <Box display={"flex"} flexDir={"row"} h={"100vh"}>
            <Box mt={20} ml={"100px"} w={"xs"}>
                <NavBar />
            </Box>
            <Divider orientation="vertical" borderColor="gray.200" mx={4} />
            <Box mt={15} w={"lg"}>
                <Box m={5}>
                    <Text as={"b"} fontSize={"2.50rem"}>All Tasks</Text>
                </Box>
                <ListTask />
            </Box>
        </Box>
    )
}