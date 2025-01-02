import Person from "./person"
import Button, { displayText } from "./button"
import Hader from './Hader'
import List from "./List"
import IncAndDec from "./Hooks"


function App(){
    return (
        <>
            <List itames={["vinay","dipak"]} />
            <Hader tital="Hello World!" />
            <Person name="vinay" age="22"/>
            <Person name="dipak" age="22"/>
            <Button text="vinay" onClick={()=>displayText("text")}/>
            <IncAndDec />
        </>
    )
}
export default App