import './App.css';
import {Header} from "./componemts/Header.js"
import {Item} from "./componemts/Item.js"
import {topics} from "./data.js"

function App() {
  return (
    <div>
      <Header />
      <ul>
        {/* <Item title = {topics[0].title} description = {topics[0].description}/>
        <Item title = {topics[1].title} description = {topics[1].description}/>
        <Item title = {topics[2].title} description = {topics[2].description}/>
        <Item title = {topics[3].title} description = {topics[3].description}/> */}
        <Item {...topics[0]}/>
        <Item {...topics[1]}/>
        <Item {...topics[2]}/>
        <Item {...topics[3]}/>
      </ul>
    </div>
  );
}

export default App;
