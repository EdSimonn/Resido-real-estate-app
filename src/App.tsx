/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import Listings from "./components/Listings";
import ListingPage from "./components/ListingPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<ListingPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
