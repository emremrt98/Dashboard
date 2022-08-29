import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Home/home.jsx';
import Teams from './Home/TopBar/topbar.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
