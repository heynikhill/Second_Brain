import {YoutubeIcon} from "../../icons/YoutudeIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { SidebarItem } from "./SidebarItem"
import { Brain } from "../../icons/brain"

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 absolute
     left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="p-2 text-purple-600">
                <Brain/>
            </div>
            Brainly
        </div>
        <div className="pt-8 pl-4 text-xl  ">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem text="Youtude" icon={<YoutubeIcon/>}/>
        </div>

    </div>
}