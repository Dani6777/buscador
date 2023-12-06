export default function SearchInput({textChange}){

    const handlerChange = event => {
        textChange(event)
    }


    return(
        <div>
            <div>
                <input onChange={handlerChange}/>
            </div>
        </div>
    )
}