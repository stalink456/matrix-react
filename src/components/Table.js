import Line from "./Line";

export default function Table({ values }) {
  return (
    <div className="table">
      {values.map((value, index) => (
        <Line line={value} key={index} />
      ))}
    </div>
  );
}