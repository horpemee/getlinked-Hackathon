import Home from "./routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Faq from "./component/faqs/Faq";
import Connect from "./routes/connect/connect";
import Registering from "./routes/registering/Registering";

function App() {
  return (
    <div className="wrapper  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Connect />} />
        <Route path="/register" element={<Registering />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
