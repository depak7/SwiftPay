import axios from "axios";
import { useState,useEffect } from "react";
export function Balance(){
    const[balance,setbalance]=useState(0);
    
    const token=localStorage.getItem('token');
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get("http://localhost:3000/api/v1/acc/balance", {
              headers: {
                'Authorization': token
              }
            });
            console.log(res.data);
            setbalance(res.data.balance);
          } catch (error) {
            console.error("Error fetching balance:", error);
          }
        }
      
        fetchData();
      }, [balance]);
      
 

    return (
        <div className="flex">
            <div className="font-bold text-lg">Your Balance:</div>
            <div className="font-semibold ml-4 text-lg">Rs.{balance}</div>
            </div>
    )

}