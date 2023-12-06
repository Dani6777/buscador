import './SearchInput.css'

export default function SearchInput({textChange}){

    const handlerChange = event => {
        textChange(event)
    }


    return(
        <div className='component-search-input'>
            <div>
                <input onChange={handlerChange}/>
            </div>
        </div>
    )
}