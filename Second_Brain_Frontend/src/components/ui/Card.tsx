import  { ShareIcon } from "../../icons/ShareIcon";
import { useEffect } from "react";

interface CardProps{
    title:"string";
    link:"string";
    type:"twitter" | "youtude";
}

export function Card({title,link,type} :CardProps){
    useEffect(() => {
    //@ts-ignore
    window.twttr?.widgets.load();
    });

    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border min-h-48 min-w-72 ">
            <div className="flex justify-between">
                <div className="flex items-center text-lg">
                    <div className="text-gray-700 pr-2 ">
                        <ShareIcon size="lg"/>
                    </div>
                    <div className="pl-4">{title}</div>
                    
                </div>
                <div className="flex">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon size="lg"/>
                        </a>
                        
                    </div>
                    {/* <div className="text-gray-500">
                        <ShareIcon size="lg"/>
                    </div> */}
                </div>
            </div>

            <div className="pt-4">

              { type==="youtude" && <iframe className="w-full" src={link.replace("watch?v=","embed/")} 
              title="Youtude video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
               
               {type==="twitter" &&<blockquote className="twitter-tweet">
                <a href ={link.replace("x.com","twitter.com")}></a>
                </blockquote> }
               
            </div>

        </div>
    </div>
}