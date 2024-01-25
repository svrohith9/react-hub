import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import "./App.css";
import Nav from "./components/Nav";
import MainBar from "./components/MainBar";

function App() {
  const dataList = ["Apple", "Banana", "Orange"];
  return (
    <div className="App">
      <Nav dataList={dataList} />
      <Header name="Rohith" color="red" />
      <MainBar />
      <Sidebar />
    </div>
  );
}
export default App;
