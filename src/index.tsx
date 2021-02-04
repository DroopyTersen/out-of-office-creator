import * as React from "react";
import { render } from "react-dom";
import { Fabric } from "office-ui-fabric-react";
import { theme } from "./setupFabric";
import Form from "./Form";

function App() {
  return (
    <Fabric
      className="App"
      style={{
        background: theme.semanticColors.bodyBackground,
        color: theme.semanticColors.bodyText
      }}
    >
      <h1>Out of Office Creator</h1>
      <Form />
    </Fabric>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
