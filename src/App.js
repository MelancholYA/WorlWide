import Header from "./componants/Header";
import Search from "./componants/Search";
import Filter from "./componants/Filter";
import Countries from "./componants/Countries";
import "./styles/index.css";
import { ThemeContext } from "./componants/ThemeContext";
import { useContext } from "react";
function App() {
  const { day } = useContext(ThemeContext);
  return (
    <div className={`App ${day ? null : "dark"}`}>
      <Header />
      <div className="body">
        <div className="subHeader">
          <Search />
          <Filter />
        </div>
        <Countries />
      </div>
    </div>
  );
}

export default App;
