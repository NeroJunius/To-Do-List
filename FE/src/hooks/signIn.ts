import { ChangeEvent, useState } from "react";
import { API } from "../libs/api";
import { IUserLogin } from "../interfaces/user";
import { useNavigate } from "react-router-dom";

export function hookSignIn() {
  const navigate = useNavigate();
  const [formLogin, setFormLogin] = useState<IUserLogin>({
    username: "",
    password: "",
  });

  function handleChange(fieldName: string, fieldValue: string) {
    setFormLogin({
        ...formLogin,
        [fieldName]: fieldValue,
    });
}

  async function handleSignIn() {
    try {
      const response = await API.post('/login', formLogin);
      console.log(response.data)
      localStorage.setItem('token', response.data.data)
      console.log("login success!", response);
      navigate("/");
    } catch (error) {
      console.log('cannot login! :', error);
    }
    
  }
  return { handleChange, handleSignIn, formLogin };
}
