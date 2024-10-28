import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Hotels from "./Components/Hotels";
import AboutUs from "./Components/AboutUs";
import Gallery from "./Components/Gallery";
import News from "./Components/News";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route exact path="/Hotels" element={<Hotels />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Gallery" element={<Gallery />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;
