import axios from "axios";

const API_URL = "/api/users/";

//Register user

const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

//Login user

const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem("user");
};

// Firstlogin
const firstLogin = async (formDetails, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    console.log(formDetails);
    console.log(config);
    const response = await axios.post(
        API_URL + "firstlogin",
        formDetails,
        config
    );

    if (response.data) {
        localStorage.setItem("userDetails", JSON.stringify(response.data));
    }

    return response.data;
};

const authService = {
    register,
    login,
    logout,
    firstLogin,
};

export default authService;
