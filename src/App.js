import './App.css'
import ContextComponent from './components/Context.jsx';
import EffectComponent from './components/Effect.jsx';
import RefComponent from './components/Ref';
import StateComponent from './components/State.jsx'

function App() {
    return (
        <div className="App">
            <StateComponent />
            <hr/>
            <EffectComponent />
            <hr/>
            <ContextComponent />
            <hr/>
            <RefComponent/>
            <hr/>
        </div>
    );
}

export default App;