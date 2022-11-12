import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeEach from "../../../../components/admin/EmployeeEach";
import EmployeeTable from "../../../../components/admin/EmployeeTable";
import Spinner from "../../../../components/common/Spinner";
import {
    getEmployees,
    reset,
} from "../../../../features/employee/employeeSlice";

const Employees = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { admin } = useSelector((state) => state.admin);
    const { employee, isLoading, isError, message } = useSelector(
        (state) => state.employee // Change this line
    );

    console.log(employee, "----------", "ss");

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (!admin) {
            navigate("/admin/signin");
        }

        dispatch(getEmployees());

        // Check for account
        return () => {
            dispatch(reset());
        };
    }, [admin, navigate, isError, message, dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-3xl md:text-4xl">Employees Manager</h1>
            </div>
            <div>
                <Link to="/admin/users/employees/create">Create Employees</Link>
            </div>
            {employee.length > 0 ? (
                <div className="employee">
                    {employee.map((emp) => {
                        return <EmployeeEach key={emp._id} employee={emp} />;
                    })}
                </div>
            ) : (
                <h3>You have not create any Employees</h3>
            )}
            {/* <EmployeeTable /> */}
        </div>
    );
};
export default Employees;
