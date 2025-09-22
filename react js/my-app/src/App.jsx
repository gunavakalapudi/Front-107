import React from "react";

function App() {
  const a = 10;
  const b = 20;
  const date = new Date().toString();

  // Components inside same file
  const Home = () => <h2>Home Component</h2>;
  const About = () => <h2>About Component</h2>;
  const Contact = () => <h2>Contact Component</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Congratulation, You completed first react app</h1>
      <p>Hello Time = {date}</p>
      <p>
        {a} + {b} = {a + b}
      </p>

      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;