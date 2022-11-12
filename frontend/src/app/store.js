import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import adminReducer from "../features/admin/adminSlice";
import employeeReducer from "../features/employee/employeeSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        admin: adminReducer,
        employee: employeeReducer,
    },
});
