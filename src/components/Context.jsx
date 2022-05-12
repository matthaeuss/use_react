import { createContext, useContext, useState } from "react";

const userContext = createContext( [{
    firstName: 'Lech',
    lastName: 'K.',
    suffix: 1,
    email: 'lech.k@smolensk.ru'
}, ()=>{} ]);

function LevelFive() {
    const [user, setUser] = useContext(userContext);
    return (
        <div>
            <h5>
                {user.firstName}
                {user.lastName}
                {user.suffix}
            </h5>
            <button onClick={()=> {
                // setUser({...user, suffix: user.suffix + 1})
                setUser(Object.assign({}, user, {suffix: user.suffix + 1}))
            }}>Increment</button>
        </div>
    )
}

function LevelFour() {

    return(
        <div>
            <h4>Level four</h4>
            <LevelFive/>
        </div>
    )
}


function LevelThree() {

    return(
        <div>
            <h3>Level three</h3>
            <LevelFour/>
        </div>
    )
}


function LevelTwo() {

    return(
        <div>
            <h2>Level two</h2>
            <LevelThree/>
        </div>
    )
}

function ContextComponent() {

    const userState = useState({
        firstName: 'Lech',
        lastName: 'K.',
        suffix: 1,
        email: 'lech.k@smolensk.ru'
    });

    return (
        <userContext.Provider value={userState}>
            <LevelTwo/>
        </userContext.Provider>
    )
};

export default ContextComponent;