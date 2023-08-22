import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PuppyDetails } from "./pages/PuppyDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puppy-details/:id" element={<PuppyDetails />} />
      </Routes>
    </>
  );
}

export default App;
