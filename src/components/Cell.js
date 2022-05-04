import { getBg } from "./Matrix";

export default function Cell({ value, show }) {
  const style = getBg(value);
  return (
    <div className="cell" style={show ? style : null}>
      {show && value}
    </div>
  );
}
