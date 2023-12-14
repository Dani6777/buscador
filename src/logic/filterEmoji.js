import emojiList from '../helpers/emojiList.json';

export default function filterEmojis(searchText, maxResult) {
    return emojiList.filter(emoji => {
        const lowercaseSearchText = searchText.toLowerCase();
        
        // Filtra por título
        if (emoji.title.toLowerCase().includes(lowercaseSearchText)) {
            return true;
        }

        // Filtra por palabras clave (si está definido y es un array)
        if (Array.isArray(emoji.keywords) && emoji.keywords.some(keyword => keyword.includes(lowercaseSearchText))) {
            return true;
        }

        return false;
    }).slice(0, maxResult);
}
