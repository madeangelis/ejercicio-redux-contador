import Counter from "./components/Counter";
// import DecrementBtn from "./components/DecrementBtn";
// import IncrementBtn from "./components/IncrementBtn";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  counter: 0,
};
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducers = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: action.payload };
    case DECREMENT:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducers, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div>
          <Counter />
        </div>
      </div>
    </Provider>
  );
}

export default App;
