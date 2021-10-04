import {data} from "../reducer/reducer"
import React, { useState } from 'react';
import './student.css';
import {Link} from "react-router-dom"
let stData=data.users
// console.log("data",stData)
function AllStudents() {
    return (
        <div>
            <Link to='/AddStudents'>Add Students</Link>
            <Link to='/ShowStudents'>Show Students</Link>

        <table>
            <thead>
                <tr>
                    <th>Sr#</th>
                    <th>Email</th>
                    <th>Student Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    stData.map((student, index) => (
                        <tr key={student.userName + index}>
                            <td>{index + 1}</td>
                            <td>{student.email}</td>
                            <td>{student.userName}</td>
                            <td>{student.role}</td>

                        </tr>
                    ))
                }
            </tbody>

        </table>
        </div>
    )
}

export default AllStudents;
