import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import SignUp from "../components/sign-up";
import SignIn from "../components/Sign-In";
import Students from "../screen/students";
import AllStudents from "../screen/allStudents";
import AddStudents from "../screen/traner/addstudets"
import ShowStudents from "../screen/traner/showStudent"

function ReactRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <SignIn />
                </Route>
                <Route path='/Sign Up'>
                    <SignUp />
                </Route>
                <Route path='/Students'>
                    <Students />
                </Route>
                <Route path='/AllStudents'>
                    <AllStudents />

                </Route>
                <Route path='/AddStudents'>
                    <AddStudents />
                </Route>
                {/* </Route> */}
                <Route path='/ShowStudents'>
                    <ShowStudents />
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouter;