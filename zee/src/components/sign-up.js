import React, { useState,useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



// import React,{useContext} from "react";
import {GlobalContext} from "../context/context"
function SignUp() {
    const {state,dispatch}= useContext(GlobalContext);
    const [stName, setStName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [roll, setRoll] = useState('');
    const [city, setCity] = useState('');



    return (
        <div style={{ textAlign: "center" }}>
            <h1>
                Sign Up
            </h1>
            <Box
                component="form"
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
                    label="Email"
                    placeholder="Email"
                    multiline
                    onChange={(event) => { setEmail(event.target.value) }}
                    value={email} type="email" /><br />
                <TextField
                    id="outlined-textarea"
                    label="Password"
                    placeholder="Password"
                    multiline
                    onChange={(event) => { setPass(event.target.value) }}
                    value={pass} type="password" /><br />


                <br />

                <TextField
                    id="outlined-textarea"
                    label="Role"
                    placeholder="Student/Traner"
                    multiline
                    onChange={(event) => { setRoll(event.target.value) }}
                    value={roll} type="text" /><br />
                     <TextField
                    id="outlined-textarea"
                    label="City"
                    placeholder="City"
                    multiline
                    onChange={(event) => { setCity(event.target.value) }}
                    value={city} type="text" />


            </Box>
           
         <button style={{width:"200px",height:"50px",backgroundColor:"lightBlue", color:"black",fontSize:"20px",fontWeight:"bold"}} onClick={() => {
             
             if(stName=="" || pass=="" || email =='' || roll == ""){
                console.log("All Fields Required")
            }
            else{
           let student = {
                    name: stName,
                    password: pass,
                    emailE1: email,
                    rollE1: roll
                }
                dispatch({type: "SIGN_UP" , payload:student})
            }

                setStName('')
                setPass('');
                setEmail('');
                setRoll('');
                setCity('')

            }}>Sign Up</button>
<Link to="/">Sign In</Link>

            {/* {
                studentData.length > 0 ? <StudentTable allStudents={studentData} /> : null
            } */}

        </div>
    )
}


export default SignUp;





































