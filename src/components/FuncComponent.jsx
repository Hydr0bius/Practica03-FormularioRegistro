import { useState } from "react";

function FuncComponent(){
    const [value, setValue] = useState(0);

    return <div>
        <button onClick={()=> setValue(value-1)}>-</button>
            {value}
        <button onClick={()=> setValue(value+1)}>+</button> </div>
}

export default FuncComponent;