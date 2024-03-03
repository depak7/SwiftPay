import { ButtonWarming } from "../Components/Buttonwarming"
export function Failure(){
    return(<div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <div className="font-bold">Insufficient Balance</div>
   
      <img
        className="mx-auto mt-4" 
        src="https://miro.medium.com/v2/resize:fit:736/1*tZxEUxuyZbyz2-CbxKjMtA.png"
        alt="Transaction Failed"
      />
      <div>
          <ButtonWarming label={"Move to dashboard"} to={"/dashboard"} buttontext={"Home"}/>
      </div>
    </div>
  </div>)
}