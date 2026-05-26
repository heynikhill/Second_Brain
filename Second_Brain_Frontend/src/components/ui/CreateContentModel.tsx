import type { ReactElement } from "react";
import {CrossIcon} from "../../icons/CrossIcon"
import { Button } from "./Button";
import {Input} from "./Input.tsx";

// interface CreateContentModelProps {
//     open: boolean;
//     onClose: () => void;
// }

export function CreateContentModel({open,onClose}){
    if (!open) return null;
    return <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
        <div className=" flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                        <CrossIcon/>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-4">
                    <Input placeholder={"Title"} className="border p-2 rounded" />
                    <Input placeholder={"Link"} className="border p-2 rounded"/>
                    
                </div>
                <div className="flex justify-center p-4" >
                    <Button variant="primary" text="Submit" size="md"/>
                </div>

            </span>
        </div>

    </div>
}