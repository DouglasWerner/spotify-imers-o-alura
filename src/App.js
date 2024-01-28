import React from "react"
import Navigation from "./componentes/Navigation/Navigation";
import Footer from "./componentes/Footer/Footer";
import Main from "./componentes/Main/Main";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Main />
        <Footer />

      </header>
    </div>
  );
}

export default App;
 