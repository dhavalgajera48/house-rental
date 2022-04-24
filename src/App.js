import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import About from "./pages/About";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Offer from "./pages/Offer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>

      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
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
