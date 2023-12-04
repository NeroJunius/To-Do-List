import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useCategory } from "../../hooks/useCategory";

interface CategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    // handleCategory: (newCategory: string) => void;
}

export default function CategoryModal({ isOpen, onClose }: CategoryModalProps) {
    const {form, handleCategory, handleChange} = useCategory()
    // const [categoryName, setCategoryName] = useState("");

    const {color, name} = form

    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("color", event.target.value);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleChange("name", event.target.value);
    };

    const handleSaveCategory = async () => {
        try {
          await handleCategory(); 
        } catch (error) {
          console.error("Error in handleSaveCategory:", error);
        } finally {
          onClose(); // Close the modal after saving
        }
      };
    

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create New Category</ModalHeader>
                <ModalCloseButton />
                    <form onSubmit={handleSaveCategory}>
                <ModalBody pb={6}>
                    <FormControl>
                        <Input
                            placeholder="Add Category"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            placeholder="Add Color"
                            value={color}
                            onChange={handleColorChange}
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                <ModalFooter>
        <Button colorScheme="blue" mr={3} type="submit">
            Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
    </ModalFooter>
                </ModalFooter>
                    </form>
            </ModalContent>
        </Modal>
    );
}
