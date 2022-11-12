import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../../features/auth/authSlice";

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            ("trig");
            navigate("/signin");
        }
    }, [user, navigate]);

    const onLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div>
            <h1>Account Protected Page</h1>
            <button onClick={onLogout}>Log Out</button>
        </div>
    );
};
export default User;
