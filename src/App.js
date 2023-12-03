import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import "./scss/styles.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
