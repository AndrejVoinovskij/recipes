import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Recipe from "./components/Recipe/Recipe";
import About from "./components/About/About";
import Community from "./components/Community/Community";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="category/:catName" element={<Home />} />
        </Route>
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
