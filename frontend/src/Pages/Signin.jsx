import { useNavigate } from "react-router-dom";
import { Button } from "../Components/Button";
import { ButtonWarming } from "../Components/Buttonwarming";
import { Heading } from "../Components/Heading";
import { Inputbox } from "../Components/Inputbox";
import { Subheading } from "../Components/Subheading";
import axios from "axios";
import { useState } from "react";
export function Signin(){
    const[username,setusername]=useState();
    const navigate=useNavigate();
    const[password,setpassword]=useState();
    return (
        <div>
               <div className=" bg-slate-200n h-screen flex justify-center">
            <div className="flex flex-col">
            <div className=" bg-white  rounded-lg w-80 text-center p-2 h-max px-4">
            <Heading label={"Login"}/>
            <Subheading text={"provide all the below mentioned details to login"}/>
            <Inputbox onchange={(e)=>{setusername(e.target.value)}}label={"Username/email"} type={"text"} inplace={"yourname@gmail.com"} />
            <Inputbox onchange={(e)=>{setpassword(e.target.value)}} label={"Password"} type={"password"} inplace={"123@123"} />
            <div className="pt-4">
                <Button label={"Login"} onClick={async function()
                {
                   const res= await axios.post("http://localhost:3000/api/v1/users/signin",{
                        username,
                        password

                    });
                    console.log(res.data);
                   
                    if (res.data.token) {
                        localStorage.setItem('token', res.data.token);
                       const token=localStorage.getItem('token');
                       console.log(token);
                        navigate('/dashboard');
                      } else {
                        console.error('Token not found in login response');
                      }
                }}/>
            </div>
            <div>
                <ButtonWarming label={"Don't have an account"} to={"/"} buttontext={"Signup"}/>
            </div>
            </div>
            </div>
        </div>

        </div>
    )
}