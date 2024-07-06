/*
    <div id="parent">
      <div id="child">
        <h1>H1 tag</h1>
        <h2>H2 tag</h2>
      </div>
    </div>

*/

const display = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" }, [
      React.createElement("h1", {}, "H1 tag"), 
      React.createElement("h2", {}, "H2 tag")
    ])
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(display);
