import { useState } from 'react';
import SearchText from './SearchInput'
import EmojiResutl from './EmojiResult'
import filterEmoji from '../logic/filterEmoji'
import './App.css'

function App() {

  const[state, setState] = useState({
    filteredEmoji: filterEmoji('',10) 
  })

  const handlerSearchChange = event =>{
    setState({
      filteredEmoji: filterEmoji(event.target.value, 10) 
    })
  }

  console.log(state)
  return (
    <div >
      <div>
        <header className='component-header'>buscador de emojis</header>
        <SearchText textChange ={handlerSearchChange}/>
        <EmojiResutl emojiData={state.filteredEmoji}/>
      </div>
    </div>
  );
}

export default App;
