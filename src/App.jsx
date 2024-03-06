//import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Header from "./components/Header";

function App() {
  //comma Operator
  let x = 11;
  x = (x++, x);
  console.log(x);

  let y = (5 + 4, 3 + 4);
  console.log(y);

  let z = (5, 5) + (6, 9);
  console.log(z);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/profile" element={<Profile />}>
            Profile
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/signin" element={<SignIn />}>
            Sign In
          </Route>
          <Route path="/signout" element={<SignOut />}>
            Sign Out
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
