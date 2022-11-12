const EmployeeEach = ({ employee }) => {
    console.log(employee);
    return (
        <div className="employee">
            <div>{employee.email}</div>
        </div>
    );
};
export default EmployeeEach;
