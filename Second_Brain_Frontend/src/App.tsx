import './App.css'
import { Button } from './components/ui/Button';
import { Card} from './components/ui/Card';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from "./icons/ShareIcon";


function App() {
  return(
    <div className='p-4'>
      
      <div className="flex justify-end gap-4">
        <Button  startIcon={<PlusIcon size="md"/>} endIcon={<ShareIcon size="md"/>} size="md" variant="primary" text="Share"/>
        <Button startIcon={<PlusIcon size="md"/>} endIcon={<ShareIcon size="md"/>} size="md" variant="secondary" text ="Add content"/>
      </div>

      <div className="flex gap-4">
        <Card  type="twitter" link="https://twitter.com/Interior/status/463440424141459456" title="first tweet"/>

        <Card type="youtude" link="https://www.youtube.com/watch?v=nDjloeIB3Pc" title="First video"/>
      </div>
      
    </div>
  )
}

export default App