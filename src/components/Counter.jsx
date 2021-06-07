import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  // const increment = () => setCounter(counter + 1);
  // const decrement = () => setCounter(counter - 1);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <>
      <button
        onClick={(e) => dispatch({ type: "DECREMENT", payload: counter - 1 })}
      >
        Decremento
      </button>
      <h1>{counter}</h1>
      <button
        onClick={(e) => dispatch({ type: "INCREMENT", payload: counter + 1 })}
      >
        Incremento
      </button>
    </>
  );
};

export default Counter;
