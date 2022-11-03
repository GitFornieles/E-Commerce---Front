// import logo from './logo.svg';
import "./App.css";
import ProductCard from "./commons/ProductCard";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/velas" element={<ProductCard />} />
      </Routes>
    </div>
  );
}

export default App;
