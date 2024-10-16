import Actor from "./Actor";
import "./App.css";
import BoockStore from "./BookStore";
import Singer from "./Singer";
import Todo from "./Todo";

function App() {
  const actors = ["Salman Sah", "shakib", "Raj", "Josim", "Rubel"];
  const singers = [
    { name: "runa laila", age: 50 },
    { name: "Pritom Hasa", age: 30 },
    { name: "Monir Khan", age: 50 },
    { name: "Sabina Yeasmin", age: 50 },
  ];

  const books = [
    { id: 1, name: "physics", price: 100 },
    { id: 2, name: "Math", price: 120 },
    { id: 3, name: "Chemistry", price: 130 },
    { id: 4, name: "Biology", price: 140 },
  ];

  return (
    <>
      <h1>Vite + React</h1>

      <BoockStore books={books}></BoockStore>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="65"></Device>
      <Device name="Watch" price="3"></Device>

      <Person></Person>
      <Student grade="7th" score="99"></Student>
      <Student grade={12} score="98"></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  );
}

function Device(props) {
  //console.log(props);
  return (
    <h2>
      This Device: {props.name}, and the price is: {props.price}{" "}
    </h2>
  );
}

function Person() {
  const age = 26;
  const person = {
    name: "Nahid",
    age: 26,
  };
  return (
    <h2>
      I am {person.name} my age is: {person.age}
    </h2>
  );
}

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);

  //const { grade, score } = { grade: "9th", score: "96" };
  return (
    <div className="student">
      <h4>This is a student</h4>
      <p>Grade: {grade} </p>
      <p>Score: {score} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    border: "2px solid purple",
    padding: " 20px",
    margin: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
