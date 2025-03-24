import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="">
      <h2 className="text-green-500">Hello</h2>
    </div>
  );
}

const Hroot = document.getElementById('root');
const root = ReactDOM.createRoot(Hroot);

root.render(<App />);

export default App;
