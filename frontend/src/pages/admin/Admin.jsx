import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../../features/admin/adminSlice";

const Admin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { admin } = useSelector((state) => state.admin);
    console.log(admin);
    useEffect(() => {
        console.log("useEffect");
        if (!admin) {
            console.log("trig");
            navigate("/admin/signin");
        }
    }, [admin, navigate]);

    const onLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <div>
            {admin ? (
                <>
                    <p>{admin.email}</p>
                    <p>{admin.role}</p>
                </>
            ) : null}
            <h1>Account Protected Page</h1>
            <button onClick={onLogout}>Log Out</button>
        </div>
    );
};
export default Admin;
