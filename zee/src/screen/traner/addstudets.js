import React, { useState, useContext } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { GlobalContext } from "../../context/context";
import { Link } from "react-router-dom"




function AddStudents() {
    const { state, dispatch } = useContext(GlobalContext);

    const [stName, setStName] = useState('');
    const [roll, setRoll] = useState('');
    const [totalMArks, setTotalMArks] = useState('');
    const [feedback, setFeedback] = useState('');
    const [grade, setGrade] = useState('');






    function addStudents() {
        let addStudentsObj = {
            stNameE1: stName,
            rollE1: roll,
            totalMArksE1: totalMArks,
            feedbackE1: feedback,
            gradeE1: grade
        }
        // console.log("addStudentsObj",addStudentsObj)
        dispatch({ type: "ADD_STUDENT", payload: addStudentsObj })

        setStName('');
        setFeedback('');
        setTotalMArks('');
        setRoll('');
        setGrade('')

    }

    return (

        <div style={{ textAlign: "center" }}>
            <Link to="/showStudents">Show Stduents</Link>
            <h1>
                Add Stduents
            </h1>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
            >


                <TextField
                    id="outlined-textarea"
                    label="User Name"
                    placeholder="Name"
                    multiline
                    onChange={(event) => { setStName(event.target.value) }}
                    value={stName} type="text" /><br />
                <TextField
                    id="outlined-textarea"
                    label="Roll Number"
                    placeholder="Roll Number"
                    multiline
                    onChange={(event) => { setRoll(event.target.value) }}
                    value={roll} type="email" /><br />
                <TextField
                    id="outlined-textarea"
                    label="Total Marks"
                    placeholder="Total Marks"
                    multiline
                    onChange={(event) => { setTotalMArks(event.target.value) }}
                    value={totalMArks} type="Total Marks" /><br />
                <TextField
                    id="outlined-textarea"
                    label="Feedback"
                    placeholder="Feedback"
                    multiline
                    onChange={(event) => { setFeedback(event.target.value) }}
                    value={feedback} type="Feedback" /><br />

                <TextField
                    id="outlined-textarea"
                    label="Grade"
                    placeholder="Grade"
                    multiline
                    onChange={(event) => { setGrade(event.target.value) }}
                    value={grade} type="Grade" /><br />

                <button onClick={addStudents}>Add Students</button>

            </Box>
        </div>
    )
}
export default AddStudents;