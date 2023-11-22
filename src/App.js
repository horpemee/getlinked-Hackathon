import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/contact/Contact";
import Register from "./component/register/Register";
import Faq from "./component/faqs/Faq";

function App() {
  return (
    <div className="wrapper  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
