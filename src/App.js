import React, { useEffect, useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext()
function App() {

  const [darkTheme, setDarkTheme] = useState(true)

  function toggleButton(){
    setDarkTheme(darkTheme => !darkTheme)
  }
  return (
<div>
  <button onClick={toggleButton}>Button</button>
  <ThemeContext.Provider value={darkTheme}>
    <FunctionContextComponent></FunctionContextComponent>
    <ClassContextComponent></ClassContextComponent>
  </ThemeContext.Provider>
</div>
  );
}

export default App;
