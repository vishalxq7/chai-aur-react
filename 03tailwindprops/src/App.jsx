import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    desc: "this is test data",
    button: "View Profile",
  };
  return (
    <>
      <p>Tailwind test</p>
      <div className="flex">
        <Card name="Vishal Gaikwad" data={myObj} />
        <Card name="Supriya Gaikwad" data={myObj} />
      </div>
    </>
  );
}

export default App;
