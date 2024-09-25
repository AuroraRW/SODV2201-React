import './TabButton.css'
function TabButton(props){
    console.log("TabButton component running")
    return(
        <button className = {props.isSelected? 'active': ''} onClick={props.onSelect}>{props.children}</button>
    )
}
export {TabButton}