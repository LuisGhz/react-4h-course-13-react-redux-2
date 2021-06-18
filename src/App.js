import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'actions';

function App() {

  const counter = useSelector(state => state.counter);
  const login = useSelector(state => state.login);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter { counter }</h1>
      <button onClick={ () => dispatch(increment()) }>+</button>
      <button onClick={ () => dispatch(decrement()) } >-</button>
    </div>
  );
}

export default App;
