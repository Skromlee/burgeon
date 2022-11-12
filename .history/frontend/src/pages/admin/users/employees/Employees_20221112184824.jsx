import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../../components/common/Spinner";
import {
    getEmployees,
    updateEmployee,
    reset,
} from "../../../../features/employee/employeeSlice";

// simple table
import Table from "../../../../components/common/Table";
import { useState } from "react";

const Employees = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { admin } = useSelector((state) => state.admin);
    const { employee, isSuccess, isFinished, isLoading, isError, message } =
        useSelector((state) => state.employee);
    const [id, setId] = useState("");
    const [visibility, setVisibility] = useState(false);
    const [emp, setEmp] = useState({});
    const [isEditing, setEditing] = useState(false);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isFinished) {
            toast.info("Updated employee details successfully");
            setEditing(false);
        }

        if (!admin) {
            navigate("/admin/signin");
        }

        dispatch(getEmployees());

        // Check for account
        return () => {
            dispatch(reset());
        };
    }, [admin, navigate, isFinished, isError, message, dispatch]);

    const handleChangePage = () => {
        dispatch(reset());
        navigate("/admin/users/employees/create");
    };

        const targetEmp = findById(targetId);
        setId(targetId);
        setEmp({
            ...targetEmp,
            dob: new Date(targetEmp.dob).toISOString().slice(0, 10),
        });
        editingHandler;
        setVisibility((prev) => !prev);
    };

    const detailHandler = (targetId) => {
        const targetEmp = findById(targetId);
        setId(targetId);
        setEmp({
            ...targetEmp,
            dob: new Date(targetEmp.dob).toISOString().slice(0, 10),
        });
        setVisibility((prev) => !prev);
    };

    const deleteHandler = (targetId) => {
        setId(targetId);
    };

    const exitHandler = () => {
        setVisibility(false);
        setEditing(false);
        setId("");
        setEmp({});
    };

    const findById = (id) => {
        let targetEmp = {};
        employee.map((eachEmp) => {
            if (eachEmp._id === id) {
                targetEmp = eachEmp;
            }
            return null;
        });
        return targetEmp;
    };

    const editingHandler = () => {
        setEditing((prev) => !prev);
    };

    const onChange = (e) => {
        setEmp((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(emp);
        dispatch(updateEmployee(emp));
    };

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <>
            {visibility && (
                <div className=" bg-slate-200 rounded-xl h-4/5 lg:h-3/5 w-3/5 absolute top-0 left-0 right-0 bottom-0 m-auto transition">
                    <div className=" p-10 flex flex-col space-y-12 transition">
                        <div className=" flex justify-between transition">
                            <div className=" flex items-center space-x-6 align-middle transition">
                                <h1 className=" text-2xl md:text-3xl transition">
                                    Employee in details
                                </h1>
                                {!isEditing && (
                                    <button
                                        onClick={editingHandler}
                                        className=" bg-brightRed p-1 px-4 rounded-full text-white hover:bg-slate-300 transition"
                                    >
                                        Edit
                                    </button>
                                )}
                            </div>
                            <div>
                                <button
                                    onClick={exitHandler}
                                    className=" font-bold text-lg transition"
                                >
                                    X
                                </button>
                            </div>
                        </div>

                        <form onSubmit={submitHandler}>
                            <div className=" flex flex-col space-y-4 lg:space-y-0 lg:flex-row">
                                <div className=" space-y-4 lg:w-1/2">
                                    {/* Employee ID */}
                                    <div className=" space-x-2 flex">
                                        <label
                                            htmlFor="id"
                                            className=" basis-1/4"
                                        >
                                            Emp ID :
                                        </label>
                                        <input
                                            type="text"
                                            id="id"
                                            name="id"
                                            value={emp._id}
                                            className=" border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            disabled
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className=" space-x-2 flex">
                                        <label
                                            htmlFor="email"
                                            className=" basis-1/4"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={emp.email}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee email"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Firstname */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="firstname"
                                            className="transition basis-1/4"
                                        >
                                            Firstname
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="firstname"
                                            value={emp.firstname}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee firstname"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Lastname */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="lastname"
                                            className="transition basis-1/4"
                                        >
                                            Lastname
                                        </label>
                                        <input
                                            type="text"
                                            id="lastname"
                                            name="lastname"
                                            value={emp.lastname}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee lastname"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="phone"
                                            className="transition basis-1/4"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            value={emp.phone}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee phone"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Citizen */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="citizen"
                                            className="transition basis-1/4"
                                        >
                                            Citizen
                                        </label>
                                        <input
                                            type="number"
                                            id="citizen"
                                            name="citizen"
                                            value={emp.citizen}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee citizen"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Role */}
                                    <div className="space-x-2 flex">
                                        <label
                                            htmlFor="role"
                                            className="basis-1/4"
                                        >
                                            Role
                                        </label>
                                        <select
                                            name="role"
                                            id="role"
                                            value={emp.role}
                                            className="border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3 transition"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        >
                                            <option value="Import">
                                                Import
                                            </option>
                                            <option value="Export">
                                                Export
                                            </option>
                                            <option value="Import Screen">
                                                Import Screen
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="transition space-y-4 lg:w-1/2">
                                    {/* Address Number */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="addressNo"
                                            className="transition basis-1/4"
                                        >
                                            Add NO.
                                        </label>
                                        <input
                                            type="text"
                                            id="addressNo"
                                            name="addressNo"
                                            value={emp.addressNo}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee address number"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Province */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="province"
                                            className="transition basis-1/4"
                                        >
                                            Province
                                        </label>
                                        <input
                                            type="text"
                                            id="province"
                                            name="province"
                                            value={emp.province}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee province"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* District */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="district"
                                            className="transition basis-1/4"
                                        >
                                            District
                                        </label>
                                        <input
                                            type="text"
                                            id="district"
                                            name="district"
                                            value={emp.district}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee district"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Sub District */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="subdistrict"
                                            className="transition basis-1/4"
                                        >
                                            SubDistrict
                                        </label>
                                        <input
                                            type="text"
                                            id="subdistrict"
                                            name="subdistrict"
                                            value={emp.subdistrict}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee subdistrict"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* Postcode */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="postcode"
                                            className="transition basis-1/4"
                                        >
                                            Postcode
                                        </label>
                                        <input
                                            type="text"
                                            id="postcode"
                                            name="postcode"
                                            value={emp.postcode}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            placeholder="Enter employee postcode"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>

                                    {/* dob */}
                                    <div className="transition space-x-2 flex">
                                        <label
                                            htmlFor="dob"
                                            className="transition basis-1/4"
                                        >
                                            Date of birth
                                        </label>
                                        <input
                                            type="date"
                                            id="dob"
                                            name="dob"
                                            value={emp.dob}
                                            className="transition border-[1px] border-black rounded-md focus:outline-none px-2 basis-2/3"
                                            disabled={isEditing ? false : true}
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            {isEditing && (
                                <div className=" flex space-x-6 mt-10 justify-end p-10 transition">
                                    <button
                                        type="submit"
                                        className=" bg-green-600 p-1 px-4 rounded-full hover:bg-green-500 text-white transition"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={editingHandler}
                                        className=" bg-slate-600 p-1 px-4 rounded-full hover:bg-slate-500 text-white transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}
            <div className=" p-6 space-y-6 flex flex-col">
                <div className=" flex justify-between">
                    <h1 className=" text-3xl md:text-4xl">Employees Manager</h1>
                    <button
                        onClick={handleChangePage}
                        className={
                            visibility
                                ? `bg-slate-600 p-2 px-4 rounded-full text-white transition`
                                : `bg-brightRed p-2 px-4 rounded-full hover:bg-brightRedLight text-white transition`
                        }
                        disabled={visibility ? true : false}
                    >
                        Create New Employees
                    </button>
                </div>
                <div></div>
                {employee.length > 0 ? (
                    <div className=" table">
                        <div className=" container mx-auto ">
                            <Table
                                data={employee}
                                rowsPerPage={20}
                                onEditClick={editHandler}
                                onDetailClick={detailHandler}
                                onDeleteClick={deleteHandler}
                                visibility={visibility}
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