import { useState } from 'react';
import './App.css';
import { Header } from './components/Header.js'
import { Item } from './components/Item.js'
import { TabButton } from './components/TabButton.js';
import { topics, topicsDes } from './data.js'
function App() {
  const [selectedTopic, setSelectedTopic] = useState('')

  console.log("App component running")
  // let tabContent = "Please click a button"
  function handleSelect(selectedButton) {
    // tabContent = selectedButton
    // console.log(tabContent)
    setSelectedTopic(selectedButton)

  }
  let tabContent = <p>Please click a button</p>
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{topicsDes[selectedTopic].title}</h3>
        <p>{topicsDes[selectedTopic].description}</p>
      </div>
    )
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
        {topics.map(ele=><Item key= {ele.title} {...ele}/>)}

        {/* <Item {...topics[0]} />
        <Item {...topics[1]} />
        <Item {...topics[2]} />
        <Item {...topics[3]} /> */}

        <TabButton isSelected={selectedTopic === 'Components'} onSelect={() => handleSelect(topics[0].title)}>{topics[0].title}</TabButton>
        <TabButton isSelected={selectedTopic === 'JSX'} onSelect={() => handleSelect(topics[1].title)}>{topics[1].title}</TabButton>
        <TabButton isSelected={selectedTopic === 'Props'} onSelect={() => handleSelect(topics[2].title)}>{topics[2].title}</TabButton>
        <TabButton isSelected={selectedTopic === 'State'} onSelect={() => handleSelect(topics[3].title)}>{topics[3].title}</TabButton>
      </ul>
      {/* {
        if(selectedTopic){
          <div>
            <h3>{topicsDes[selectedTopic].title}</h3>
            <p>{topicsDes[selectedTopic].description}</p>
          </div>
        }else{
          <p>Please click a button</p>
        }
      } */}

      {/* {selectedTopic ? 
        (<div>
          <h3>{topicsDes[selectedTopic].title}</h3>
          <p>{topicsDes[selectedTopic].description}</p>
        </div>) : 
        (
          <p>Please click a button</p>
        )
      } */}
      {tabContent}
    </div>
  );
}

export default App;
