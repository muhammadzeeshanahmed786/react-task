import React, { useState ,useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {GlobalContext} from "../context/context"


function SignIn() {
    const {state,dispatch}= useContext(GlobalContext);

    const [stName, setStName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [roll, setRoll] = useState('');
    const history=useHistory()

    


    return (
        <div style={{ textAlign: "center" }}>
            <h1>
                Sign In
            </h1>
            <Box
                // component="form"
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
                <TextField
                    id="outlined-textarea"
                    label="Role"
                    placeholder="Student/Traner"
                    multiline
                    onChange={(event) => { setRoll(event.target.value) }}
                    value={roll} type="Roll" /><br />



            </Box>


            <button style={{ width: "200px", height: "50px", backgroundColor: "lightBlue", color: "black", fontSize: "20px", fontWeight: "bold" }} onClick={() => {
              
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
                dispatch({type: "SIGN_IN" , payload:student})

            }
                if(roll == "Student"){
                    history.push('/Students')
                }
                else if(roll==="Traner"){
                    history.push("/AllStudents")
                }
                else{
                    <h1>404 Not Found </h1>
                }
                // console.log(student)

                setStName('');
                setPass('');
                setEmail('');
                setRoll('');
// console.log(users.filter(data=> data.email === email.value && data.password === password.value))
            }}>Sign In</button>

            <Link to='/Sign Up'>SIGN UP</Link>

        </div>
    )
}


export default SignIn;
