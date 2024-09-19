import image from '../images/react.png'
function Header(){
    return(
      <header>
        <img width='30%' src={image} alt="show the logo"/>
        <h1>Web programming</h1>
        <p>Learn everything about React you need to know!</p>
      </header>
    )
  }
export {Header}