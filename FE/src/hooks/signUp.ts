import { ChangeEvent, useState } from "react";
import { API } from "../libs/api";
import { IUserRegister } from "../interfaces/user";
import { useNavigate } from "react-router-dom";

export function hookSignUp() {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState<IUserRegister>({
    name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  function handleChange(fieldName: string, fieldValue: string) {
    setFormRegister({
      ...formRegister,
      [fieldName]: fieldValue,
    });
  }

  async function handleSignUp() {
    try {
      const response = await API.post('/register', formRegister);
      console.log("data Register", response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return { handleChange, handleSignUp, formRegister};
}