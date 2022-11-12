import axios from "axios";

const API_URL = "/api/manages/employees";

// Create new employee
const createEmployee = async (employeeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, employeeData, config);
    console.log(response);
    console.log(response.data);
    return response.data;
};

// Get employees data
const getEmployees = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);

    return response.data;
};

// // Delete user goal
// const deleteGoal = async (goalId, token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     };

//     const response = await axios.delete(API_URL + goalId, config);

//     return response.data;
// };

const employeeService = {
    createEmployee,
    getEmployees,
};

export default employeeService;
