import React from "react";
import FlightPanel from "./pages/flight-panel.component";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div>
      <CssBaseline />
      <Container>
        <FlightPanel />
      </Container>
    </div>
  );
}

export default App;
