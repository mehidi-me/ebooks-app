import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import AccountEdit from "../page/AccountEdit";
import EbookDetails from "../page/EbookDetails";
import Home from "../page/Home";
import Login from "../page/Login";
import Signup from "../page/Signup";
import ViewAll from "../page/ViewAll";
import ScrollToTop from "./ScrollToTop";

function MainRouter() {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <AccountEdit />
              </RequireAuth>
            }
          />
          <Route
            path="/ebooks/:id"
            element={
              <RequireAuth>
                <ViewAll />
              </RequireAuth>
            }
          />
          <Route
            path="/ebook/:id"
            element={
              <RequireAuth>
                <EbookDetails />
              </RequireAuth>
            }
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default MainRouter;
