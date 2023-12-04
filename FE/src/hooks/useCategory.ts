import { useState } from "react";
import { API } from "../libs/api";

export function useCategory() {
    const [categories, setCategory] = useState<ICategory[]>([])
    const [form, setForm] = useState<ICategory>({
        // _id:"",
        name: "",
        color: "",
    });

    function handleChange(fieldName: string, fieldValue: string) {
        setForm({
          ...form,
          [fieldName]: fieldValue,
        });
    }
    
    async function handleCategory() {
        try {
          const response = await API.post('/category', form);
          console.log("a category was added!", response);
        } catch (error) {
          console.log(error);
        } finally {
            getCategories();
        }
    } 

    async function getCategories() {
        try {
            const response = await API.get('/category')
            setCategory(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        handleChange,
        handleCategory,
        form,
        categories,
        getCategories
    }
}