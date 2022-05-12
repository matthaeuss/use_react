import {useState} from "react";

function StateComponent(){
    const [isGreen, setIsGreen] = useState(true);

    return (
        <h1 style={{color: 'blue'}}>useState example</h1>
    )
}

export default StateComponent