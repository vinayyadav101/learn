// call list and using map function to add all values in li tag.

function List(propes){
    return(
        <ul>
            {
                propes.itames.map(
                    (value , index)=><li key={index}>{value}</li>
                )  
            }
        </ul>
    )
}
export default List