
import { Appbar } from "../Components/Appbar";

import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";
export function Dashboard(){
      return(
        <div className="m-8">
          <Appbar></Appbar>
          <Balance />
          <Users />
        </div>
    )
}