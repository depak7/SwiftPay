import axios from "axios";
import { useEffect, useState } from "react";
import { Balance } from "./Balance";
import { ButtonWarming } from "./Buttonwarming";

export function Profile(){
  const [user,setuser]=useState([]);
    useEffect(()=>
    {
        const fetchdata=async ()=>{
            const res=await axios.get("http://localhost:3000/api/v1/users/details",{
            headers:{
                'Authorization':localStorage.getItem("token")
            }})
            setuser(res.data);
        }
        fetchdata();
    },[])


return(
    <div className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-gray-400 p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <div className="rounded-full h-32 w-32 bg-slate-200 flex justify-center items-center mb-4">
            <div className="text-xl text-grey-700 font-bold ">{user.firstname ? user.firstname[0] : ''}</div>
          </div>
          <div className="text-xl font-bold text-gray-800 mb-2">{user.firstname} {user.lastname}</div>
          <div>
            <Balance />
          </div>
        </div>
      </div>
      <div>
          <ButtonWarming label={"Move to dashboard"} to={"/dashboard"} buttontext={"Dashboard"}/>
      </div>
    </div>)
}
