import EmployeeList from "../EmployeeList";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EMPLOYEES_URL } from "../../api/urls";
import SearchBar from "../SearchBar";
import FilterComponent from "../FilterComponent";


function Home() {
    const [employees, setEmployees] = useState();

    const params = useParams();

    async function getEmployees() {
        let fetchedEmployees = await fetchEmployees(params.id);
        console.log(fetchedEmployees);
        setEmployees(fetchedEmployees);
      }

    async function fetchEmployees() {
        console.log("URL",EMPLOYEES_URL)
        let result = await fetch(EMPLOYEES_URL);
        return result.json();
    }

    useEffect(() => getEmployees, []);

    return(
        <>
        <SearchBar />
        <FilterComponent />
        <EmployeeList employees={employees} filters={["jobRoles","location"]}/>
        <div>Homepage</div>
        </>
    )
}

export default Home;