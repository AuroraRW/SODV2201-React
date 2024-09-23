function Item(props){
    // console.log(props)
    return(
        <li>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}
export {Item}