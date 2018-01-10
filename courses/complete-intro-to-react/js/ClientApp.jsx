import React from "react";
import { render } from "react-dom";

const MyTitle = function MyTitle(props) {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function MyFirstComponent() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="The Last Kingdom" color="GreenYellow" />
      <MyTitle title="Rick and Morty" color="LimeGreen" />
      <MyTitle title="Star Trek: Discovery" color="Peru" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById("app"));
