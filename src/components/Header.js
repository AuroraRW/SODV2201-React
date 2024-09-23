import images from '../images/react.png'
import "./Header.css"
function Header() {
    return (
        <header style= {{textAlign: 'center'}}>
            <img width='30%' src={images} />
            <h1>Web programming</h1>
            <p>Learn everything about React you need to know!</p>
        </header>
    )
}
export {Header}