import type { ReactElement } from "react";

type Variants ="primary" | "secondary";

interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?:boolean;
}

const variantStyles ={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600"
} 
const sizeStyles ={
    "sm":"py-2 px-2 text-sm rounded-sm",
    "md":"py-4 px-4  text-md rounded-md " ,
    "lg":"py-6 px-6 text-xl rounded-xl"
}

const defaultStyles= "rounded-md  " 


export const Button= (props:ButtonProps) =>{

    return <button 
    onClick={props.onClick}
    className={`${variantStyles[props.variant]}
     ${defaultStyles} ${sizeStyles[props.size]} ${props.fullWidth ? "w-full flex justify-center items-center" : ""}`} >
            <div className="flex items-center">
                {props.startIcon ? <div className="pr-2">{props.startIcon}  </div> :null} 
                <div className="pl-2 pr-2">
                    {props.text} 
                </div>
                
                {props.endIcon ? <div className="pr-2">{props.endIcon}  </div> :null}
                
            </div>
         </button>
}

<Button variant="primary" size="md" onClick ={() => {}}  text ={"asd"}/>