import { useState } from "react"

const UpdateWhenClick = () => {
    const [count, setCount] = useState(0)
    
    const onClickHandler = () => {
        setCount(count+1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>{onClickHandler()}}>+1</button>
        </div>
    )
}

export default UpdateWhenClick