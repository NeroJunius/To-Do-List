import {
    Box,
    Checkbox,
    Container,
    Flex,
    Input,
    Text,
    Select,
    Button
} from "@chakra-ui/react";
import { ITaskList } from "../interfaces/taskList";
import { useCategory } from "../hooks/useCategory";
import { useEffect, ChangeEvent } from "react";
import { useToDo } from "../hooks/useToDo";
import { DeleteIcon } from "@chakra-ui/icons";
// import Work from "/images/work-category.svg"
// import Study from "/images/study-category.svg"
// import Groceries from "/images/groceries-category.svg"
// import Sports from "/images/sport-category.svg"
// import Rectangle from "/images/rectangle-2.svg"
// import Checked from "../assets/checked.svg"

export default function ListTask(_props: ITaskList) {
    const { categories, getCategories } = useCategory();
    const { task, getTask, updateStatus, handleToDo, handleChange, formToDo, updateTodo, setUpdateTodo, setCheckboxStates, checkboxStates } = useToDo();

    const { description, category } = formToDo

    const handleDesc = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("description", event.target.value);
    };

    const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
        handleChange("category", event.target.value);
    };

    const handleUpdateStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdateTodo((prevUpdateTodo) => ({
            ...prevUpdateTodo,
            status: event.target.checked,
        }));
    };

    useEffect(() => {
        getCategories()
        getTask()
    }, [])
    return (
        <Container p={5} w={"100%"} display="flex" flexDirection="column">
            <form onSubmit={handleToDo}>
                <Box
                    border={"1px"}
                    borderColor={"gray.200"}
                    display={"flex"}
                    flexDir={"row"}
                    gap={4}
                    w={"auto"}
                >
                    <Input
                        placeholder="Add a new task"
                        size={"lg"}
                        bgColor={"gray.100"}
                        width={"50.75rem"}
                        alignItems={"center"}
                        name="description"
                        onChange={handleDesc}
                        value={description}
                    />
                    <Select
                        pl={2}
                        ml={3}
                        w={"30rem"}
                        size={"lg"}
                        name="category"
                        onChange={handleCategory}
                        value={category}
                    >
                        <option value="">Insert Category</option>
                        {categories.map((data) => (
                            <option key={data._id} value={data._id}>
                                {data.name}
                            </option>
                        ))}
                    </Select>
                    <Button size={"lg"} type='submit'>Submit</Button>
                </Box>
            </form>

            <Flex flexDir={"column"} mt={10} gap={4}>
                {task.map((task, index) => (
                    <Box display={"flex"} border={"1px"} borderColor={"gray.200"} key={task._id}>
                        <Checkbox
                            size={"lg"}
                            isChecked={checkboxStates[index]}
                            onMouseDown={() => updateStatus(task._id, index)}
                        />
                            <Box display={"flex"} gap={4} m={3}>
                                <Box>
                                    <Text as={"b"} size={"md"}>{task.description}</Text>
                                </Box>
                                <Button bgColor={task.category?.color}>
                                    <Text color={'white'}>{task.category?.name}</Text>
                                </Button>
                                <Button leftIcon={<DeleteIcon/>}>Delete</Button>
                            </Box>
                        
                    </Box>
                ))}
            </Flex>
        </Container>
    )
}