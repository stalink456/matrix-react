import { useEffect, useState } from "react";
import "./App.css";
import { getValues, bgleft, bgmiddle, bgright } from "./components/Matrix";
import Table from "./components/Table";

function App() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(getValues());
  }, []);

  const greaterFilter = () => {
    setValues(
      values.map((m) =>
        m.map((n) => {
          return { ...n, show: n.value > 0 };
        })
      )
    );
  };

  const equalFilter = () => {
    setValues(
      values.map((m) =>
        m.map((n) => {
          return { ...n, show: true };
        })
      )
    );
  };

  const lesserFilter = () => {
    setValues(
      values.map((m) =>
        m.map((n) => {
          return { ...n, show: n.value < 0 };
        })
      )
    );
  };

  return (
    <div className="container">
      <div className="title">Draw table</div>
      <Table values={values} />
      <div className="actions">
        <button style={bgleft} onClick={greaterFilter}>
          {"Filter > 0"}
        </button>
        <button style={bgmiddle} onClick={equalFilter}>
          {"All"}
        </button>
        <button style={bgright} onClick={lesserFilter}>
          {"Filter < 0"}
        </button>
      </div>
    </div>
  );
}

export default App;
