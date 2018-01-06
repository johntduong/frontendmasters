import React from "react";
import { render } from "react-dom";

const ce = React.createElement;
const MyTitle = function MyTitle(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function MyFirstComponent() {
  return ce(
    "div",
    { id: "my-first-component" },
    ce(MyTitle, { title: "Game of Thrones", color: "YellowGreen" }),
    ce(MyTitle, { title: "The Last Kingdom", color: "GreenYellow" }),
    ce(MyTitle, { title: "Rick and Morty", color: "LimeGreen" }),
    ce(MyTitle, { title: "Legion", color: "Peru" })
  );
};

render(ce(MyFirstComponent), document.getElementById("app"));
