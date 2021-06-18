import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, auth } from 'actions';

function App() {

  const counter = useSelector(state => state.counter);
  const login = useSelector(state => state.login);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter { counter }</h1>
      <button onClick={ () => dispatch(increment()) }>+</button>
      <button onClick={ () => dispatch(decrement()) } >-</button>
      <p>{ login ? <h3>Logined</h3> : <h3>Not logined yet</h3> }</p>
      <button onClick={ () => dispatch(auth()) } >Login</button>
    </div>
  );
}

export default App;
