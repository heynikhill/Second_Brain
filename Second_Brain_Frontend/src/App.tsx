import './App.css'
import { Button } from './components/ui/Button';
import { Card} from './components/ui/Card';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from "./icons/ShareIcon";


function App() {
  return(
    <>
      <Button  startIcon={<PlusIcon size="md"/>} endIcon={<ShareIcon size="md"/>} size="md" variant="primary" text="Share"/>
      <Button startIcon={<PlusIcon size="md"/>} endIcon={<ShareIcon size="md"/>} size="md" variant="secondary" text ="Add content"/>

      <Card />
    </>
  )
}

export default App