// add atribute in button tag and call back function exicute

export function displayText(value){
    alert("hello")
    const root = document.getElementById('root')
    const text = document.createElement('h1')
    text.textContent = value
    console.log(value);
    
    root.appendChild(text)
}
function Button(propes){
    return(
        <button onClick={propes.onClick}>{propes.text}</button>
    )
}
export default Button