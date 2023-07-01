import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AllArticles from "./pages/all-articles";
import NoPage from "./pages/NoPage";
import Login from "./pages/login";
import Admin from "./pages/admin";
import NewArticle from "./pages/new-article";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all-articles" element={<AllArticles />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin/>}/>
          <Route path="new-article" element={<NewArticle/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);