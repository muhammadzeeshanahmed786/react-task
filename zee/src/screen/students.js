import { keys } from "@mui/system";
import React,{useEffect,useContext} from "react";
import {GlobalContext} from '../context/context'
// import {data} from "../reducer/reducer"


function Students(){

    const {state,dispatch}= useContext(GlobalContext);
let y =state.authUser
// console.log("user",y);
// console.log("len",  Object.keys(state.authUser).length > 0);
let trues = Object.keys(state.authUser).length
return(
    <div>
        <h1>Student</h1>
        {
      trues >0 && (
          <div>
              <h1>name:{y.name}</h1>
              <h1>Email:{y.emailE1}</h1>
              <h1>Email:{y.rollE1}</h1>


          </div>
            
        )
    }
    </div>
)
  
   


}
export default Students;
