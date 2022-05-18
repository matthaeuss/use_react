import './App.css'
import ContextComponent from './components/Context.jsx';
import EffectComponent from './components/Effect.jsx';
import RefComponent from './components/Ref';
import StateComponent from './components/State.jsx'
import ReducerComponent from './components/Reducer.jsx'
import MemoComponent from './components/Memo.jsx'
import CallbackComponent from "./components/Callback";
import LayoutEffect from './components/LayoutEffect';
import ImperativeHandle from './components/ImperativeHandle'

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
            <ReducerComponent/>
            <hr/>
            <MemoComponent />
            <hr/>
            <CallbackComponent />
            <hr/>
            <LayoutEffect />
            <hr/>
            <ImperativeHandle />
        </div>
    );
}

export default App;