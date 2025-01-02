// using useState to create rerander component value
import { useState } from "react";


function IncAndDec(){
    // useSate returens arr . so we have to destrucature arr.
    let [x,setX] = useState(0)
        return (
            <>
                <h1>Count X: {x}</h1>
            {/* setX is call backfunction to writable x value and rerander */}
                <button onClick={()=> setX(x+1)}>Increase</button>
                <button onClick={()=>setX(x-1)}>Decrease</button>
            </>
        )
}

export default IncAndDec