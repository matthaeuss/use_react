import {createContext, useContext, useState} from "react";

const UserContext = createContext([{
    firstName: 'Lech',
    lastName: 'K.',
    suffix: 1,
    email: 'lech.k@smolensk.edu.pl'
}, () => {}])

function LevelFive(){
    const [user, setUser] = useContext(UserContext);


    return (
        <div>
            <h5>{user.firstName}, {user.lastName}. {user.suffix}</h5>
            <button onClick={() =>{
                // setUser({...user, suffix: user.suffix + 1})
                setUser(Object.assign({}, user, {suffix: user.suffix + 1}))
            }}>Increment</button>
        </div>
    )
}

function LevelFour(){
    return (
        <div>
            <h1>fourth level</h1>
            <levelFive/>
        </div>
    )
}

function levelThree(){
    return (
        <div>
            <h2>fourth level</h2>
            <levelFour/>
        </div>
    )
}

function levelTwo(){
    return (
        <div>
            <h3>fourth level</h3>
            <levelThree/>
        </div>
    )
}

function ContextComponent(){
    const userState = useState({
        firstName: 'Lech',
        lastName: 'K.',
        suffix: 1,
        email: 'lech.k@smolensk.edu.pl'
    });

    return (
        <UserContext.Provider vaue={userState}>
            <levelTwo/>
        </UserContext.Provider>
    )
}

export default ContextComponent();