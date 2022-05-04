import Cell from "./Cell";

export default function Line({ line }) {
  return (
    <div className="line">
      {line.map((value, index) => (
        <Cell value={value.value} show={value.show} key={index} />
      ))}
    </div>
  );
}
