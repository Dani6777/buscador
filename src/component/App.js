import { useState } from 'react';
import SearchText from './SearchInput'
import EmojiResutl from './EmojiResult'
import filterEmoji from '../logic/filterEmoji';

function App() {

  const[state, setState] = useState({
    filteredEmoji: filterEmoji('',5) 
  })

  const handlerSearchChange = event =>{
    setState({
      filteredEmoji: filterEmoji(event.target.value, 5) 
    })
  }

  console.log(state)
  return (
    <div >
      <div>
        <h1>buscador de emojis</h1>
        <SearchText textChange ={handlerSearchChange}/>
        <EmojiResutl emojiData={state.filteredEmoji}/>
      </div>
    </div>
  );
}

export default App;
