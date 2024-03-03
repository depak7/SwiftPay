import { ButtonWarming } from "../Components/Buttonwarming";

export  function Success(){
    return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="font-bold">Transaction Success</div>
         
            <img
              className="mx-auto mt-4" 
              src="https://media.vogue.in/wp-content/themes/vogue/images/check-circle.gif"
              alt="Transaction Success"
            />
            <div>
                <ButtonWarming label={"Move to dashboard"} to={"/dashboard"} buttontext={"Home"}/>
            </div>
          </div>
        </div>
      );
      
      
}