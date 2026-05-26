import { useState } from "react";
import '../App.css'
import { Button } from '../components/ui/Button';
import { Card} from '../components/ui/Card';
import { Sidebar } from "../components/ui/Sidebar";
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from "..//icons/ShareIcon";
import {CreateContentModel} from "../components/ui/CreateContentModel";

export  function Dashboard() {
  const [modalOpen,setModalOpen]=useState(false);
  return( 
      <div>
        <Sidebar/>
        <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
          <CreateContentModel open={modalOpen} onClose={()=>{
            setModalOpen(false);
          }} />
          <div className="flex justify-end gap-4">
            <Button  onClick={()=>{
              setModalOpen(true)
            }} startIcon={<PlusIcon size="md"/>} endIcon={<ShareIcon size="md"/>} size="md" variant="secondary" text ="Add content"/>
            <Button  startIcon={<PlusIcon size="md"/>} endIcon={<ShareIcon size="md"/>} size="md" variant="primary" text="Share brain"/>

          </div>

          <div className="flex gap-4">
            <Card  type="twitter" link="https://twitter.com/Interior/status/463440424141459456" title="first tweet"/>

            <Card type="youtube" link="https://www.youtube.com/watch?v=nDjloeIB3Pc" title="First video"/>
            <Card type="youtube" link="https://www.youtube.com/watch?v=QZ3a1Hc1FTM" title="Second Video"/>
          </div>
          
        </div>
      </div>
    
  )
}

