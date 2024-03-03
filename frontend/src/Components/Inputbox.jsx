export function Inputbox(props)
{
    return(
        <div className="text-sm font-medium text-left py-3">
            <div>
                {props.label}
            </div>
            <input onChange={props.onchange} type={props.ty} placeholder={props.inplace} ></input> 
        </div>
    )
}