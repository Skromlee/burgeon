import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../../features/auth/authSlice";
import { useState } from "react";
import EditDialog from "../../components/user/EditDialog";
import { reset, firstLogin } from "../../features/auth/authSlice";
import Spinner from "../../components/common/Spinner";
import { toast } from "react-toastify";

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, userDetails, isSuccess, isError, isLoading, message } =
        useSelector((state) => state.auth);

    const [id, setId] = useState("");
    const [visibility, setVisibility] = useState(false);

    const initialFormDetails = {
        firstname: "",
        lastname: "",
        phone: "",
        citizen: "",
        addressNo: "",
        province: "",
        district: "",
        subdistrict: "",
        postcode: "",
        dob: "",
    };

    const [formDetails, setFormDetail] = useState(initialFormDetails);

    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
        if (!userDetails) {
            setVisibility(true);
        }

        dispatch(reset());
    }, [user, userDetails, navigate, dispatch]);

    const onLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    const editingHandler = () => {};
    const exitHandler = () => {
        setVisibility(false);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(firstLogin(formDetails));
    };
    const onChange = (e) => {
        setFormDetail((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    return (
        <>
            {visibility && (
                <EditDialog
                    editingHandler={editingHandler}
                    exitHandler={exitHandler}
                    submitHandler={submitHandler}
                    formDetails={formDetails}
                    onChange={onChange}
                />
            )}
            <div>
                <h1>Account Protected Page</h1>
                <button onClick={onLogout}>Log Out</button>
            </div>
        </>
    );
};
export default User;
