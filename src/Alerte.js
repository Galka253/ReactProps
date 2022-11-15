export default function Alerte(props) {
  return (
    <div>
      <button onClick={() => props.myFunction(props.MyName)}>click me</button>
    </div>
  );
}
Alerte.defaultProps = {
  MyName: "this my default name",
};
