import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { increment } from "./redux/reducers/firstReducer";

const App = (): ReactElement => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> UNIDADES</h1>
      <p>{count}</p>
      <button type={"button"} onClick={() => dispatch(increment(1))}>
        ADICIONAR UMA UNIDADE
      </button>
    </div>
  );
};

export default App;
