import React, { useState } from 'react'

const UpdateObject = () => {
    const [employee, setEmployee] = useState(
        {
            id: 1,
            name: "Ahmed",
            age: 28,
            address: {
                street: "koraish",
                building: 16
            }
        })
    const [customers, setCustomer] = useState(
        [
            { id: 1, name: "Ahmed", age: 28 },
            { id: 2, name: "Mahmoud", age: 29 },
            { id: 3, name: "Ismail", age: 30 },
            { id: 4, name: "Samy", age: 44 },

        ]
    )
    function updateEmployeeAge() {
        setEmployee({ ...employee, age: 30, name: "Mahmoud" })
    }
    function updateEmployeeAddress() {
        setEmployee({ ...employee, address: { ...employee.address, street: "Cairo" } })
    }
    function updateArrayOfObjects() {

    }
    return (
        <>
            <div>
                Employee ID:{employee.id}
                <br />
                Employee name:{employee.name}
                <br />
                Employee age:{employee.age}
                <br />
                Employee Street:{employee.address.street}
                <br />
                Employee Building:{employee.address.building}
                <br />
                <button onClick={updateEmployeeAge}>Update the age</button>
                <button onClick={updateEmployeeAddress}>Update the street</button>
            </div>
            <hr />

            <ul className="list-group">
                {customers.map((customer) =>
                    <li key={customer.id}> {customer.name}</li>
                )}
            </ul>
        </>

    )
}

export default UpdateObject