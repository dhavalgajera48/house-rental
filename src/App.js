import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>

      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
