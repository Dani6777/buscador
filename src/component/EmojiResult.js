import { useEffect } from "react"
import Clipboard from "clipboard"
import EmojiResultRow from './EmojiResultRow'

export default function EmojiResult({emojiData}){

    useEffect(()=>{
        const clipboard = new Clipboard(".copy-to-clipboard")

        return clipboard.destroy();
    },[])
    return(
        <div>
            {
                emojiData.map(emojiData =>
                <EmojiResultRow key={emojiData.title} symbol={emojiData.symbol} title={emojiData.title}/>)
            }
        </div>
    )
}