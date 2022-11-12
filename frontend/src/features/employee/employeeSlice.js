import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeeService from "./employeeService";

const initialState = {
    employee: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Create new employee
export const createEmployee = createAsyncThunk(
    "employee/create",
    async (employeeData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().admin.admin.token; // use admin token to confirm
            return await employeeService.createEmployee(employeeData, token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Get employees data
export const getEmployees = createAsyncThunk(
    "employee/getAll",
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().admin.admin.token;
            return await employeeService.getEmployees(token);
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// // Delete user goal
// export const deleteGoal = createAsyncThunk(
//     "goals/delete",
//     async (id, thunkAPI) => {
//         try {
//             const token = thunkAPI.getState().auth.user.token;
//             return await goalService.deleteGoal(id, token);
//         } catch (error) {
//             const message =
//                 (error.response &&
//                     error.response.data &&
//                     error.response.data.message) ||
//                 error.message ||
//                 error.toString();
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// );

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.employee.push(action.payload);
            })
            .addCase(createEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getEmployees.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.employee = action.payload;
                console.log(state, "------------");
            })
            .addCase(getEmployees.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const { reset } = employeeSlice.actions;
export default employeeSlice.reducer;
