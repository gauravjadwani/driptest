import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const handleLogin = ()=>{
        axios.post("/temp-login").then((res)=>{
            const props = { message: res.data.layout};
            navigate('/home',{state:props})           
        }).catch((err)=>{
            console.log("err",err)
        })
    }
    return (
        <>
        <div>this is the login scren</div>
        <button onClick={handleLogin}>Login Anonymously</button>
        </>
    );
}

export default Login;
