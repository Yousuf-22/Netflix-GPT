import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";

const App = () => {
  return (
    <Body/>
  );
}

const Hroot = document.getElementById('root');
const root = ReactDOM.createRoot(Hroot);

root.render(<App />);

export default App;
