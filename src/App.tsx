import React from "react";
import "./App.css";
import ContentElement from "./models/content-elements";

function App() {
  return (
    <>
      <ContentElement.Text tag="h1">Hello world</ContentElement.Text>
      <ContentElement.Text>
        This is a text element with type{" "}
        <ContentElement.Text tag="span" modifiers={["accent"]}>
          'text-title'
        </ContentElement.Text>
      </ContentElement.Text>
      <ContentElement.Text>This is a default text element</ContentElement.Text>
    </>
  );
}

export default App;
