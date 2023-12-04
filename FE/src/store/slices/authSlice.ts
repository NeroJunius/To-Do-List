import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/user';

const initialAuthState: IUser = {
    id: 0,
    name: "",
    phone: 0,
    email: "",
    username: "",
    password: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        AUTH_LOGIN: (_, action) => {
            const payload = action.payload;
            console.log("redux auth login :", payload);
            localStorage.setItem("token", payload.token)
            const user: IUser = {
                id: payload.user.id,
                name: payload.user.name,
                phone: payload.user.phone,
                email: payload.user.email,
                username: payload.username,
                password: payload.user.password
            };
            return user;
        },

        AUTH_ERROR: () => {
            localStorage.removeItem("token");
        },

        AUTH_LOGOUT: () => {
            localStorage.removeItem("token");
        }        
    }
})