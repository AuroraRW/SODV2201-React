import './App.css';
import { Header } from './components/Header.js'
import { Item } from './components/Item.js'
import { TabButton } from './components/TabButton.js';
import {topics} from './data.js'
function App() {
  function handleSelect(selectedButton){
    console.log(selectedButton)
  }
  return (
    <div>
      <Header />
      <ul>
        {/* <Item title={topics[0].title} description={topics[0].description} />
        <Item title={topics[1].title} description={topics[1].description} />
        <Item title={topics[2].title} description={topics[2].description} />
        <Item title={topics[3].title} description={topics[3].description} />
       */}
       <Item {...topics[0]}/>
       <Item {...topics[1]}/>
       <Item {...topics[2]}/>
       <Item {...topics[3]}/>
       <TabButton onSelect ={()=>handleSelect(topics[0].title)}>{topics[0].title}</TabButton>
       <TabButton onSelect ={()=>handleSelect(topics[1].title)}>{topics[1].title}</TabButton>
       <TabButton onSelect ={()=>handleSelect(topics[2].title)}>{topics[2].title}</TabButton>
       <TabButton onSelect ={()=>handleSelect(topics[3].title)}>{topics[3].title}</TabButton>
      </ul>
    </div>
  );
}

export default App;
