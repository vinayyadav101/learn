import { useState } from "react"

// conditional rendarring meaning is in this jsx i have to us java script condtion in {} . change the values using condtion.
function OddAndEven(){
    let [x,setX]= useState(0)

    return(
        <>
            Count:{x} is {
            x%2 === 0
            ?"odd"
            :"even"
            }

                <button onClick={
                    ()=>setX(x+1)
                }>
                    Increase
                </button>

                <button onClick={
                    ()=>setX(x-1)
                }>
                    Decrese
                </button>
        </>
    )

}

export default OddAndEven