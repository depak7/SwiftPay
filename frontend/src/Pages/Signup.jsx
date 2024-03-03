import { useState } from "react";
import { Button } from "../Components/Button";
import { ButtonWarming } from "../Components/Buttonwarming";
import { Heading } from "../Components/Heading";
import { Inputbox } from "../Components/Inputbox";
import { Subheading } from "../Components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 export function Signup()
{
    const[username,setusername]=useState();
    const[firstname,setfirstname]=useState();
    const[lastname,setlastname]=useState();
    const[password,setpassword]=useState();
    const navigate=useNavigate();
    return(
        <div className=" bg-slate-200n h-screen flex justify-center">
            <div className="flex flex-col">
            <div className=" bg-white  rounded-lg w-80 text-center p-2 h-max px-4">
            <Heading label={"Signup"}/>
            <Subheading text={"provide all the below mentioned details to signin"}/>
            <Inputbox onchange={(e)=>{setusername(e.target.value)}}label={"Username/email"} type={"text"} inplace={"yourname@gmail.com"} />
            <Inputbox onchange={(e)=>{setfirstname(e.target.value)}} label={"Firstname"} type={"text"} inplace={"Deepak"} />
            <Inputbox onchange={(e)=>{setlastname(e.target.value)}}label={"Lastname"} type={"text"} inplace={"Sakthivel"} />
            <Inputbox onchange={(e)=>{setpassword(e.target.value)}} label={"Password"} type={"password"} inplace={"123@123"} />
            <div className="pt-4">
                <Button label={"Signup"} onClick={async function()
                {
                   const res= await axios.post("http://localhost:3000/api/v1/users/signup",{
                        username,
                        firstname,
                        lastname,
                        password

                    });
                    console.log(res.data);
                    navigate("signin");
                }}/>
            </div>
            <div>
                <ButtonWarming label={"Already have a account"} to={"/signin"} buttontext={"Signin"}/>
            </div>
            </div>
            </div>
        </div>
    )

}
