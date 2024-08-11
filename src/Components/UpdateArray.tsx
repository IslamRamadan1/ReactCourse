import React, { useState } from 'react'

const UpdateArray = () => {
    const [employees, setEmployee] = useState<string[]>(['Samir', 'Ahmed', 'Sara'])
    const [employees2, setEmployee2] = useState<string[]>([])
    function AddEmployee() {
        var data = employees.filter((val) => val.includes('Islam'));

        if (data.length === 0) {
            setEmployee([...employees, "Islam"])
        }
        else {
            setEmployee2(employees.filter((employee) => employee !== "Islam"))
        }
    }
    function updateArray() {
        setEmployee(employees.map((employee) => employee === "Sara" ? "Tasneem" : employee))
    }
    return (
        <div>
            <ul>
                {employees.map((employee) =>
                    <li key={employee}>{employee}</li>
                )}
            </ul>
            <button onClick={AddEmployee}>Add Islam To Array</button>
            <button onClick={updateArray}>Update Array</button>
        </div>
    )
}

export default UpdateArray