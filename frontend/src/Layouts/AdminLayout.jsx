import { Outlet } from "react-router-dom";
import AdminNav from "../components/admin/AdminNav";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const navItems = [
    { href: "/admin", icon: AiOutlineDashboard, label: "Dashboard" },
    { href: "/admin/createparcels", icon: BsBoxSeam, label: "Create Parcels" },
    {
        href: "/admin/users",
        icon: AiOutlineUsergroupAdd,
        label: "User Manager",
    },
    { href: "/admin/", icon: FaQuestionCircle, label: "FAQ" },
];

const AdminLayout = () => {
    return (
        <>
            <div className="flex">
                <AdminNav navItems={navItems} />
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default AdminLayout;
