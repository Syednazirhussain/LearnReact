import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Context from "./pages/Context";
import Ref from "./pages/Ref";
import Reducer from "./pages/Reducer";
import Callback from "./pages/Callback";
import Effect from "./pages/Effect";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="effects" element={<Effect />} />
          <Route path="context" element={<Context />} />
          <Route path="ref" element={<Ref />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="callback" element={<Callback />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
