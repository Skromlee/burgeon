import axios from "axios";

const API_URL = "/api/manages/customers/";

// Create new employee
const createCustomer = async (employeeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, employeeData, config);
    return response.data;
};

// Get employees data
const getCustomers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL, config);

    return response.data;
};

// Update employees data
const updateCustomer = async (employeeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.post(
        API_URL + employeeData._id,
        employeeData,
        config
    );

    return response.data;
};

//Delete employee
const deleteCustomer = async (employeeId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.delete(API_URL + employeeId, config);

    return response.data;
};

const employeeService = {
    createCustomer,
    getCustomers,
    updateCustomer,
    deleteCustomer,
};

export default employeeService;
