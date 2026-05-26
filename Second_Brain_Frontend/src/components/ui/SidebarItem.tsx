import { ReactElement } from "react";

export function SidebarItem({text,icon}:{
    text:string;
    icon:ReactElement;
}){
    return <div className="flex text-gray-700 py-2 cursor-pointer
    hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150 ">
        <div className="p-2 w-10 flex justify-center">
            {icon}
        </div>
        <div className="flex items-center">
            {text}
        </div>
    </div>
}