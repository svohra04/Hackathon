import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeTile from "./EmployeeTile";
import './style/EmployeeList.css';

function EmployeeList({employees}) {

    const navigate = useNavigate();

    const employeesList = employees && employees.map(employee => <EmployeeTile key={employee._id} employee={employee} />
    )

    return (
        <div>
            <div className="employee-list">{employeesList}</div>
        </div>
    )

}

export default EmployeeList;