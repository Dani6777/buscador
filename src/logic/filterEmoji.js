import emojiList from '../helpers/emojiList.json'

export default function filterEmojis(searchText, maxResult){
    
    return emojiList.filter(emoji=>{

        if(emoji.title.toLowerCase().includes(searchText.toLowerCase())) return true;

        if(emoji.keywords.includes(searchText)) return true;

        return false;
    }).slice(0, maxResult)
}