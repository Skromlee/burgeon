import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../../components/common/Spinner";
import {
    getEmployees,
    reset,
} from "../../../../features/employee/employeeSlice";

// simple table
import Table from "../../../../components/common/Table";
import { useState } from "react";

const Employees = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { admin } = useSelector((state) => state.admin);
    const { employee, isLoading, isError, message } = useSelector(
        (state) => state.employee // Change this line
    );
    const [id, setId] = useState("");
    const [visibility, setVisibility] = useState(false);

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

    const handleChangePage = () => {
        dispatch(reset());
        navigate("/admin/users/employees/create");
    };

    const editHandler = (targetId) => {
        console.log("edit");
        setId(targetId);
        // Need Redux to fetch employee detail in dept
        console.log(`Edit employee: ${targetId}`);
    };
    const detailHandler = (targetId) => {
        console.log("detail");
        setId(targetId);
        setVisibility((prev) => !prev);
        console.log(`Detail employee: ${targetId}`);
    };
    const deleteHandler = (targetId) => {
        console.log("delete");
        setId(targetId);
        console.log(`Delete employee: ${targetId}`);
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            {visibility && (
                <div className="bg-slate-200 rounded-xl h-3/5 w-3/5 absolute top-0 left-0 right-0 bottom-0 m-auto ">
                    <div className="">{id}</div>
                </div>
            )}
            <div className="p-6 space-y-6 flex flex-col">
                <div>
                    <h1 className="text-3xl md:text-4xl">Employees Manager</h1>
                </div>
                <div>
                    <button
                        onClick={handleChangePage}
                        className="bg-brightRed p-2 px-4 rounded-full text-white"
                    >
                        Create New Employees
                    </button>
                </div>
                {employee.length > 0 ? (
                    <div className="table">
                        <div className="container mx-auto ">
                            <Table
                                data={employee}
                                rowsPerPage={4}
                                onEditClick={editHandler}
                                onDetailClick={detailHandler}
                                onDeleteClick={deleteHandler}
                            />
                        </div>
                    </div>
                ) : (
                    <h3>You have not create any Employees</h3>
                )}
            </div>
        </>
    );
};
export default Employees;
