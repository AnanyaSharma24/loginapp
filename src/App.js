import React from "react";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/Userslice";
import Logout from "./Components/Logout";

const App = () => {
    const user = useSelector(selectUser);

   return <div>{user ? <Logout /> : <Login/>}</div>;
};
export default App;

