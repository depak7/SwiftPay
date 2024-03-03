import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Users(){
    const[users,setusers]=useState([]);
    const [filter,setfilter]=useState("");
    const token=localStorage.getItem('token');

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/users/bulk?filter=" + filter, {
                    headers: {
                        'Authorization': token
                    }
                });
                console.log(res.data);
                if (res.data.user && Array.isArray(res.data.user)) {
                    setusers(res.data.user);
                } else {
                    console.error("Invalid users data:", res.data.user);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
    
        fetchData();
    }, [filter]);
    console.log(users);
    
      
    return (
        <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setfilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
        {users.map(user => <User key={user._id} user={user} />)}
        </div>
    </>
    )

}
function User({user}){
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>

}
