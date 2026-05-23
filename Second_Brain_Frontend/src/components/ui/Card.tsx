import  { ShareIcon } from "../../icons/ShareIcon";

export function Card(){
    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border ">
            <div className="flex justify-between">
                <div className="flex items-center text-lg">
                    <div className="text-gray-700 pr-2 ">
                        <ShareIcon size="lg"/>
                    </div>
                    Project idea
                </div>
                <div className="flex">
                    <div className="pr-2 text-gray-500">
                        <ShareIcon size="lg"/>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon size="lg"/>
                    </div>
                </div>
            </div>

            <div className="pt-4">
              {/* <iframe className="w-full" src="https://www.youtube.com/embed/23e6R4G8Res?si=RocmL7fVEzI58Pz1" title="YouTube video player" 
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
               
               <blockquote className="twitter-tweet">
  <a href="https://twitter.com/Interior/status/463440424141459456"></a>
</blockquote>
            </div>

        </div>
    </div>
}