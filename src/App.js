import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./Main";
import"./style.css";

const App = () => {
    
  return (
      <div className="App">
        <BrowserRouter>
            <Navbar />
            <Sidebar />
             <Routes>
                <Route path="/generation/:id" element={<Main />} />
            </Routes>
      </BrowserRouter>
      </div>
    );
}

export default App;
