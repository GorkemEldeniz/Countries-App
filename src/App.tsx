import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<Home />} />
        <Route element={<Country />} path=":country" />
      </Route>
    </Routes>
  )
}

export default App
