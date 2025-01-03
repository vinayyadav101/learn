import { useState } from "react"

function SingUpAndLogin(){

    const [login, setLogin] = useState(true)

function changeValue(){
    setLogin(!login)
}
    return (
        <div className="loginAndSingUp">
            <h1>Sing Up</h1>
            <input type="text" placeholder="Enter user Name" hidden={login}></input>
            <input type="text" placeholder="email"></input>
            <input type="text" placeholder="password"></input>
            <button>{login?"Log IN":"Sing Up"}</button>
        <div>
            user loging
                <a style={{color:"blue", marginLeft:"20px" ,cursor:"pointer"}} onClick={changeValue}>
                    {
                        login?"Sing Up":"Log In"
                    }
                </a>
        </div>
        </div>
    )
}

export default SingUpAndLogin