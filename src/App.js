import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css';
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "./components/pages/Blog";
const SignIn = React.lazy(() => import("./components/authentication/SingIn"));
const SignUp = React.lazy(() => import("./components/authentication/SingUp")); 
const Home = React.lazy(() => import("./components/pages/Home"));

function App() {
  return (
    <div className="App">
     <Suspense> 
       <Routes>
          <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path="/blog" element={<PrivateRoute> <Blog /> </PrivateRoute>} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </div>
  );
}

export default App;
